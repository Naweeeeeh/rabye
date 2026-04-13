import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Crosshair } from "lucide-react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const biteCenters = [
    { id: 1, name: "ABC Animal Bite Center - Cebu City", address: "B. Rodriguez St, Cebu City, 6000 Cebu", lng: 123.891338, lat: 10.3089952 },
    { id: 2, name: "Guadalupe-Banawa CEBU Animal Bite Center", address: "8V8P+J57, Cebu City, 6000 Cebu", lng: 123.88497, lat: 10.3165395 },
    { id: 3, name: "Rabies Buster / RB ABC (Cebu City)", address: "Rm 203, The River Gate Complex, 18 Gen. Maxilom Ave, Cebu City, 6000", lng: 123.8997473, lat: 10.3117381 },
    { id: 4, name: "ABC Animal Bite Center - Banilad", address: "2010, 2FL, LDM Building, Gov. M. Cuenco Ave, Cebu City, 6000", lng: 123.9126438, lat: 10.3494522 },
    { id: 5, name: "Rabies Buster - Talisay City Branch", address: "Talisay City, Cebu", lng: 123.8390731, lat: 10.2544932 },
];

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

interface GetHelpProps {
    onLocationFound?: (coords: [number, number]) => void;
}

const GetHelpSection = ({ onLocationFound }: GetHelpProps) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const userMarkerRef = useRef<maplibregl.Marker | null>(null);
    const popupsRef = useRef<{ [key: number]: maplibregl.Popup }>({});

    const currentCoordsRef = useRef<[number, number] | null>(null);
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [isLocating, setIsLocating] = useState(false);
    const [locationError, setLocationError] = useState("");

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
            center: [123.8854, 10.3157],
            zoom: 11,
        });

        map.current.addControl(new maplibregl.NavigationControl(), "top-right");

        map.current.on('load', () => {
            map.current?.addSource('route', {
                type: 'geojson',
                data: { type: 'FeatureCollection', features: [] }
            });

            map.current?.addLayer({
                id: 'route-line',
                type: 'line',
                source: 'route',
                layout: { 'line-join': 'round', 'line-cap': 'round' },
                paint: {
                    'line-color': '#2D5128',
                    'line-width': 6,
                    'line-opacity': 0.8
                }
            });
        });

        map.current.on('click', () => {
            Object.values(popupsRef.current).forEach(popup => popup.remove());
        });

        biteCenters.forEach((center) => {
            const popup = new maplibregl.Popup({ offset: 25, closeButton: false })
                .setLngLat([center.lng, center.lat])
                .setHTML(
                    `<div style="padding: 2px; font-family: ui-sans-serif, system-ui, sans-serif;">
                       <h4 style="font-weight: 700; margin: 0 0 4px 0; color: #142C14;">${center.name}</h4>
                       <p style="font-size: 12px; color: #537B2F; margin: 0 0 8px 0; line-height: 1.4;">${center.address}</p>
                       <span style="font-size: 10px; background-color: #E4EB9C; color: #142C14; padding: 2px 6px; border-radius: 4px; font-weight: 600;">Click for directions</span>
                     </div>`
                );

            popupsRef.current[center.id] = popup;

            const marker = new maplibregl.Marker({ color: "#537B2F" })
                .setLngLat([center.lng, center.lat])
                .addTo(map.current!);

            const el = marker.getElement();
            el.style.cursor = 'pointer';

            el.addEventListener('mouseenter', () => {
                if (!popup.isOpen()) popup.addTo(map.current!);
            });

            el.addEventListener('mouseleave', () => {
                popup.remove();
            });

            el.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!popup.isOpen()) popup.addTo(map.current!);
                if (currentCoordsRef.current) {
                    handleFetchRoute(currentCoordsRef.current, [center.lng, center.lat]);
                } else {
                    setLocationError("Please click 'Use My Location' first to set your starting point.");
                }
            });
        });

        return () => {
            map.current?.remove();
            map.current = null;
        };
    }, []);

    const handleFetchRoute = async (start: [number, number], end: [number, number]) => {
        const url = `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.routes && data.routes.length > 0) {
                const route = data.routes[0].geometry;
                const source = map.current?.getSource('route') as maplibregl.GeoJSONSource;

                if (source) {
                    source.setData({
                        type: 'Feature',
                        properties: {},
                        geometry: route
                    });
                }

                const bounds = new maplibregl.LngLatBounds().extend(start).extend(end);
                map.current?.fitBounds(bounds, { padding: 80, duration: 2000 });
            }
        } catch (error) {
            console.error("Routing error:", error);
            setLocationError("Could not calculate the route. The routing server might be busy.");
        }
    };

    const handleFindNearest = () => {
        setIsLocating(true);
        setLocationError("");

        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser.");
            setIsLocating(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                try {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    const userCoords: [number, number] = [userLng, userLat];

                    setUserLocation(userCoords);
                    currentCoordsRef.current = userCoords;

                    if (typeof onLocationFound === 'function') {
                        onLocationFound(userCoords);
                    }

                    let nearestCenter = biteCenters[0];
                    let shortestDistance = calculateDistance(userLat, userLng, nearestCenter.lat, nearestCenter.lng);

                    biteCenters.forEach((center) => {
                        const distance = calculateDistance(userLat, userLng, center.lat, center.lng);
                        if (distance < shortestDistance) {
                            shortestDistance = distance;
                            nearestCenter = center;
                        }
                    });

                    if (map.current) {
                        // Immediately center map on user so they see action happening
                        map.current.flyTo({ center: userCoords, zoom: 13, duration: 1500 });

                        // Safely remove old marker
                        if (userMarkerRef.current) {
                            userMarkerRef.current.remove();
                        }

                        // Create the Custom User Marker using reliable innerHTML
                        const customMarkerEl = document.createElement('div');
                        customMarkerEl.innerHTML = `
                            <div style="position: relative; width: 22px; height: 22px; background-color: #142C14; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);">
                                <div style="position: absolute; top: -36px; left: 50%; transform: translateX(-50%); background-color: #142C14; color: white; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: bold; white-space: nowrap; pointer-events: none; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
                                    You
                                    <div style="position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); border-width: 6px 6px 0; border-style: solid; border-color: #142C14 transparent transparent transparent;"></div>
                                </div>
                            </div>
                        `;

                        userMarkerRef.current = new maplibregl.Marker({ element: customMarkerEl })
                            .setLngLat(userCoords)
                            .addTo(map.current);

                        // Await the route calculation
                        await handleFetchRoute(userCoords, [nearestCenter.lng, nearestCenter.lat]);

                        setTimeout(() => {
                            const popup = popupsRef.current[nearestCenter.id];
                            if (popup && !popup.isOpen()) popup.addTo(map.current!);
                        }, 1000);
                    }
                } catch (err) {
                    console.error("Location Processing Error:", err);
                    setLocationError("An error occurred while plotting your location.");
                } finally {
                    // This guarantees the button stops spinning no matter what!
                    setIsLocating(false);
                }
            },
            (error) => {
                console.error("Geolocation Error:", error);
                let errMsg = "Unable to retrieve your location. Please check browser permissions.";
                if (error.code === 1) errMsg = "Location access was denied. Please allow permissions.";
                if (error.code === 3) errMsg = "Location request timed out. Please try again.";
                setLocationError(errMsg);
                setIsLocating(false);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
        );
    };

    return (
        <section id="get-help" className="bg-[#E4EB9C]/10 py-20 flex-1 flex flex-col justify-center">
            <div className="container w-full px-4 md:px-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2D5128] text-center mb-4 flex items-center justify-center gap-3">
                    <MapPin className="text-[#2D5128]" size={32} /> Get Help
                </h2>
                <p className="text-center text-[#142C14]/75 max-w-2xl mx-auto mb-12">
                    Find Animal Bite Treatment Centers (ABTCs) near you. Use your location to see the quickest road route to life-saving care.
                </p>

                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
                    <div className="lg:col-span-2 bg-[#E4EB9C]/40 rounded-xl overflow-hidden shadow-sm border border-[#8DA750]/40">
                        <style>{`.maplibregl-popup-content { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); padding: 12px 16px; pointer-events: none; }`}</style>
                        <div ref={mapContainer} className="w-full h-[500px] lg:h-[650px]" />
                    </div>

                    <div className="flex flex-col justify-start space-y-6 lg:col-span-1">
                        <div className="bg-[#E4EB9C]/40 rounded-xl p-6 shadow-sm border border-[#8DA750]/40">
                            <h3 className="font-heading font-bold text-[#142C14] mb-2 flex items-center gap-2">
                                <Crosshair size={16} className="text-[#2D5128]" /> Locate Yourself
                            </h3>
                            <button
                                onClick={handleFindNearest}
                                disabled={isLocating}
                                className="w-full inline-flex items-center justify-center rounded-lg bg-[#2D5128] text-white font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                            >
                                {isLocating ? "Locating..." : "Use My Location"}
                            </button>
                            {locationError && <p className="text-[#142C14] text-xs mt-3 font-medium">{locationError}</p>}
                        </div>

                        <div className="bg-[#E4EB9C]/40 rounded-xl p-6 shadow-sm border border-[#8DA750]/40">
                            <h3 className="font-heading font-bold text-[#142C14] mb-2 flex items-center gap-2">
                                <Phone size={18} className="text-[#2D5128]" /> Emergency Hotline
                            </h3>
                            <p className="text-[#142C14]/75 text-sm mb-3">Department of Health — Philippines</p>
                            <div className="flex items-center gap-2 text-[#2D5128] font-semibold text-lg">
                                (02) 8651-7800
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetHelpSection;