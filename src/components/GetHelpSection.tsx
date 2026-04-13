import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Crosshair, ArrowRight, HeartPulse } from "lucide-react";
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
                    'line-color': '#16a34a', // Matched to green-600
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
                       <h4 style="font-weight: 900; font-size: 14px; margin: 0 0 4px 0; color: #0f172a;">${center.name}</h4>
                       <p style="font-size: 12px; color: #64748b; margin: 0 0 8px 0; line-height: 1.4;">${center.address}</p>
                       <span style="font-size: 10px; background-color: #f0fdf4; color: #15803d; padding: 4px 8px; border-radius: 6px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border: 1px solid #bbf7d0;">Click for directions</span>
                     </div>`
                );

            popupsRef.current[center.id] = popup;

            // Updated Marker Color to green-600
            const marker = new maplibregl.Marker({ color: "#16a34a" })
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
                        map.current.flyTo({ center: userCoords, zoom: 13, duration: 1500 });

                        if (userMarkerRef.current) {
                            userMarkerRef.current.remove();
                        }

                        // Updated User Marker to match UI
                        const customMarkerEl = document.createElement('div');
                        customMarkerEl.innerHTML = `
                            <div style="position: relative; width: 22px; height: 22px; background-color: #0f172a; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);">
                                <div style="position: absolute; top: -36px; left: 50%; transform: translateX(-50%); background-color: #0f172a; color: white; padding: 4px 12px; border-radius: 8px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; white-space: nowrap; pointer-events: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                    You
                                    <div style="position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); border-width: 6px 6px 0; border-style: solid; border-color: #0f172a transparent transparent transparent;"></div>
                                </div>
                            </div>
                        `;

                        userMarkerRef.current = new maplibregl.Marker({ element: customMarkerEl })
                            .setLngLat(userCoords)
                            .addTo(map.current);

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
        <section id="get-help" className="bg-white pt-10 pb-20 border-t border-slate-100 flex-1 flex flex-col justify-center">
            <div className="container max-w-7xl px-4 md:px-6">
                
                {/* Neater Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                        Facility Locator
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
                        <MapPin className="text-green-600" size={32} /> Find Treatment
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
                        Find an accredited Animal Bite Treatment Center (ABTC) near you. Use your location for quick routing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 w-full">
                    
                    {/* The Map Container - Styled cleanly */}
                    <div className="lg:col-span-2 bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-slate-200">
                        {/* CSS scoped to map popups to match UI */}
                        <style>{`.maplibregl-popup-content { border-radius: 1rem !important; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important; padding: 16px !important; border: 1px solid #f1f5f9 !important; }`}</style>
                        <div ref={mapContainer} className="w-full h-[500px] lg:h-[600px]" />
                    </div>

                    {/* Action Cards Container */}
                    <div className="flex flex-col justify-start space-y-6 lg:col-span-1">
                        
                        {/* Interactive Geolocation Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all hover:border-green-200">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                                    <Crosshair size={20} className="text-slate-700" />
                                </div>
                                <h3 className="font-heading font-black text-xl text-slate-900">Locate Yourself</h3>
                            </div>
                            
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Allow location access to automatically find the fastest route to the nearest clinic.
                            </p>

                            <button
                                onClick={handleFindNearest}
                                disabled={isLocating}
                                className="w-full h-14 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white font-bold px-6 text-sm hover:bg-slate-800 transition-all shadow-md active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLocating ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Calculating Route...
                                    </span>
                                ) : (
                                    "Use My Location"
                                )}
                            </button>
                            {locationError && (
                                <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-600 text-xs font-bold border border-red-100">
                                    {locationError}
                                </div>
                            )}
                        </div>

                        {/* Emergency Hotline Card (Matched to previous design) */}
                        <div className="bg-white rounded-3xl p-8 border-2 border-green-600 shadow-2xl shadow-green-100 relative overflow-hidden">
                            <HeartPulse className="absolute -bottom-4 -right-4 text-green-600 opacity-[0.03]" size={160} />
                            
                            <div className="flex items-center gap-2 mb-6">
                                <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
                                <span className="text-[10px] font-black text-green-700 uppercase tracking-widest">DOH Hotline</span>
                            </div>

                            <h3 className="font-heading font-black text-2xl text-slate-900 mb-2">Emergency</h3>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                Need immediate medical guidance? Call the health department directly.
                            </p>
                            
                            <a 
                                href="tel:0286517800"
                                className="group w-full h-14 inline-flex items-center justify-between px-5 rounded-xl bg-green-600 text-white transition-all hover:bg-green-700 shadow-lg shadow-green-200 active:scale-[0.98]"
                            >
                                <div className="flex items-center gap-3">
                                    <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                                    <span className="text-lg font-black tracking-tight">(02) 8651-7800</span>
                                </div>
                                <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetHelpSection;