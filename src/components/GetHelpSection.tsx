import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Crosshair, Hospital } from "lucide-react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useLanguage } from "../lib/LanguageContext";

const biteCenters = [
    { id: 1, name: "ABC Animal Bite Center - Cebu City", address: "B. Rodriguez St, Cebu City, 6000 Cebu", contact: "09054134420", lng: 123.891338, lat: 10.3089952 },
    { id: 2, name: "Guadalupe-Banawa CEBU Animal Bite Center", address: "8V8P+J57, Cebu City, 6000 Cebu", contact: "", lng: 123.88497, lat: 10.3165395 },
    { id: 3, name: "Rabies Buster / RB ABC (Cebu City)", address: "Rm 203, The River Gate Complex, 18 Gen. Maxilom Ave, Cebu City, 6000", contact: "09054406971", lng: 123.8997473, lat: 10.3117381 },
    { id: 4, name: "ABC Animal Bite Center - Banilad", address: "2010, 2FL, LDM Building, Gov. M. Cuenco Ave, Cebu City, 6000", contact: "09687327917", lng: 123.9126438, lat: 10.3494522 },
    { id: 5, name: "Rabies Buster - Talisay City Branch", address: "Stall No. 6, Krystal Mall, San Isidro Road, Talisay, 6045 Cebu", contact: "09621467448", lng: 123.8390731, lat: 10.2544932 },
    { id: 6, name: "Cebu City Health Department", address: "8W55+4JW, General Maxilom Ave, Extension, Cebu City, 6000 Cebu", contact: "0322326969", lng: 123.9090935, lat: 10.3078513 }
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
    const { t } = useLanguage();
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const userMarkerRef = useRef<maplibregl.Marker | null>(null);
    const popupsRef = useRef<{ [key: number]: maplibregl.Popup }>({});

    const currentCoordsRef = useRef<[number, number] | null>(null);
    const [isLocating, setIsLocating] = useState(false);
    const [locationError, setLocationError] = useState("");

    const handleFetchRoute = async (start: [number, number], end: [number, number]) => {
        const url = `https://router.project-osrm.org/route/v1/driving/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.code === 'Ok' && data.routes && data.routes.length > 0) {
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
            } else {
                throw new Error("No driving route found");
            }
        } catch (error) {
            console.error("Routing error:", error);
            setLocationError("Could not calculate the route. The public routing server might be busy.");
        }
    };

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
                       <h4 style="font-weight: 900; font-size: 14px; margin: 0 0 4px 0; color: #142C14;">${center.name}</h4>
                       <p style="font-size: 12px; color: #537B2F; margin: 0 0 4px 0; line-height: 1.4;">${center.address}</p>
                       <p style="font-size: 11px; font-weight: 700; color: #8DA750; margin: 0 0 10px 0;">Phone: ${center.contact || 'N/A'}</p>
                       <span style="font-size: 10px; background-color: #E4EB9C; color: #2D5128; padding: 4px 8px; border-radius: 6px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border: 1px solid #8DA750;">Click for directions</span>
                     </div>`
                );

            popupsRef.current[center.id] = popup;

            const marker = new maplibregl.Marker({ color: "#2D5128" })
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

            const onMarkerClick = async (e: Event) => {
                e.stopPropagation();
                if (!popup.isOpen()) popup.addTo(map.current!);

                if (currentCoordsRef.current) {
                    setIsLocating(true);
                    setLocationError("");
                    await handleFetchRoute(currentCoordsRef.current, [center.lng, center.lat]);
                    setIsLocating(false);
                } else {
                    setLocationError("Please click 'Use My Location' first to set your starting point.");
                }
            };

            el.addEventListener('click', onMarkerClick);
            el.addEventListener('touchstart', onMarkerClick, { passive: true });
        });

        return () => {
            map.current?.remove();
            map.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

                        const customMarkerEl = document.createElement('div');
                        customMarkerEl.innerHTML = `
                            <div style="position: relative; width: 22px; height: 22px; background-color: #142C14; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);">
                                <div style="position: absolute; top: -36px; left: 50%; transform: translateX(-50%); background-color: #142C14; color: white; padding: 4px 12px; border-radius: 8px; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; white-space: nowrap; pointer-events: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                                    You
                                    <div style="position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%); border-width: 6px 6px 0; border-style: solid; border-color: #142C14 transparent transparent transparent;"></div>
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

    const handleCenterClick = async (center: typeof biteCenters[0]) => {
        if (!map.current) return;

        map.current.flyTo({ center: [center.lng, center.lat], zoom: 14, duration: 1500 });

        Object.values(popupsRef.current).forEach(p => p.remove());
        const popup = popupsRef.current[center.id];
        if (popup && !popup.isOpen()) popup.addTo(map.current!);

        if (currentCoordsRef.current) {
            setIsLocating(true);
            setLocationError("");
            await handleFetchRoute(currentCoordsRef.current, [center.lng, center.lat]);
            setIsLocating(false);
        }
    };

    return (
        <section id="get-help" className="bg-white pt-10 pb-20 border-t border-slate-100 flex-1 flex flex-col justify-center">
            <div className="container max-w-7xl px-4 md:px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4EB9C]/40 text-[#2D5128] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                        {t("Facility Locator")}
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 flex items-center justify-center gap-3">
                        <MapPin className="text-[#2D5128]" size={32} /> {t("Find Treatment")}
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
                        {t("Find an accredited Animal Bite Treatment Center (ABTC) near you. Use your location for quick routing.")}
                    </p>
                </div>

                {/* Removed fixed height from grid, using items-start to allow columns to dictate height */}
                <div className="grid lg:grid-cols-3 gap-8 w-full items-start">

                    {/* Explicit Map Height */}
                    <div className="lg:col-span-2 bg-slate-50 rounded-3xl overflow-hidden shadow-sm border border-[#E4EB9C] h-[500px] lg:h-[650px]">
                        <style>{`.maplibregl-popup-content { border-radius: 1rem !important; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important; padding: 16px !important; border: 1px solid #f1f5f9 !important; }`}</style>
                        <div ref={mapContainer} className="w-full h-full" />
                    </div>

                    {/* Explicit Right Column Height matching the map */}
                    <div className="flex flex-col gap-6 lg:col-span-1 h-auto lg:h-[650px]">

                        {/* Top Card: Locate Yourself (Shrinks to fit content) */}
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-[#8DA750]/10 border border-slate-100 transition-all hover:border-[#8DA750]/50 shrink-0">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2.5 rounded-xl bg-[#E4EB9C]/20 border border-[#8DA750]/20">
                                    <Crosshair size={20} className="text-[#2D5128]" />
                                </div>
                                <h3 className="font-heading font-black text-xl text-slate-900">{t("Locate Yourself")}</h3>
                            </div>

                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                {t("Allow location access to automatically find the fastest route to the nearest clinic.")}
                            </p>

                            <button
                                onClick={handleFindNearest}
                                disabled={isLocating}
                                className="w-full h-14 inline-flex items-center justify-center rounded-2xl bg-[#2D5128] text-[#E4EB9C] font-black px-6 text-sm uppercase tracking-widest hover:bg-[#142C14] transition-all shadow-xl shadow-[#142C14]/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLocating ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        {t("Calculating Route...")}
                                    </span>
                                ) : (
                                    t("Use My Location")
                                )}
                            </button>
                            {locationError && (
                                <div className="mt-4 p-3 rounded-lg bg-[#142C14]/5 text-[#142C14] text-xs font-bold border border-[#142C14]/20">
                                    {locationError}
                                </div>
                            )}
                        </div>

                        {/* Bottom Card: Scrollable ABTC List (Takes up exact remaining space) */}
                        <div className="bg-white rounded-3xl shadow-xl shadow-[#8DA750]/10 border border-slate-100 flex flex-col flex-1 min-h-[350px] lg:min-h-0 overflow-hidden">
                            {/* Fixed Header */}
                            <div className="p-6 border-b border-slate-100 bg-[#E4EB9C]/10 shrink-0">
                                <h3 className="font-heading font-black text-lg text-slate-900 flex items-center gap-2">
                                    <Hospital className="text-[#2D5128]" size={20} />
                                    Treatment Centers
                                </h3>
                                <p className="text-xs text-slate-500 mt-1 font-medium">Select a facility to view on map</p>
                            </div>

                            {/* Scrollable Content locked inside the parent container */}
                            <div className="flex-1 overflow-y-auto no-scrollbar p-2 pb-6">
                                {biteCenters.map((center) => (
                                    <button
                                        key={center.id}
                                        onClick={() => handleCenterClick(center)}
                                        className="w-full text-left p-4 hover:bg-[#E4EB9C]/20 rounded-2xl border-b border-slate-50 last:border-0 transition-all group"
                                    >
                                        <h4 className="font-bold text-[#142C14] group-hover:text-[#2D5128] text-sm mb-1 transition-colors">
                                            {center.name}
                                        </h4>
                                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                                            {center.address}
                                        </p>
                                        {center.contact ? (
                                            <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-[#537B2F]">
                                                <Phone size={12} /> {center.contact}
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-slate-400">
                                                <Phone size={12} /> No contact available
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetHelpSection;