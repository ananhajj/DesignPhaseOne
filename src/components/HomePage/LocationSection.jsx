import React, { useMemo, useState } from "react";
import {
    MapPin,
    Navigation,
    Clock,
    Image as ImageIcon,
    Play,
    Car,
    Train,
    Plane,
    ShoppingBag,
} from "lucide-react";
import Container from "../ui/Container";

const defaultDistances = [
    { label: "Metro Station", value: "3 min", icon: Train },
    { label: "International Airport", value: "30 min", icon: Plane },
    { label: "Shopping District", value: "7 min", icon: ShoppingBag },
    { label: "Financial Center", value: "5 min", icon: Car },
];

export default function LocationSection({
    eyebrow = "LOCATION",
    title = "Where urban sophistication meets coastal tranquility",
    lead = "Strategically positioned to offer the perfect balance of city accessibility and natural serenity.",
    addressLines = ["Akdam Sales Gallery", "Atasehir Finance Center", "34398 Istanbul, Turkey"],
    mapEmbedUrl = "https://www.google.com/maps?q=Atasehir%20Istanbul&output=embed",
    directionsQuery = "Akdam Sales Gallery Atasehir Istanbul",
    distances = defaultDistances,
    visuals = [],
}) {
    const [activeTab, setActiveTab] = useState(visuals?.length ? "visuals" : "map");
    const [visualIndex, setVisualIndex] = useState(0);

    const fullAddress = useMemo(
        () => addressLines.filter(Boolean).join(", "),
        [addressLines]
    );

    const directionsUrl = useMemo(
        () =>
            `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                directionsQuery || fullAddress
            )}`,
        [directionsQuery, fullAddress]
    );

    const currentVisual = visuals?.[visualIndex];

    return (
        <section id="location" className="py-20 lg:py-32 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-[#7c533a] rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                        <MapPin className="w-4 h-4" />
                        {eyebrow}
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        {title.split(" ").map((word, index, array) =>
                            index >= array.length - 2 ? (
                                <span
                                    key={index}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c533a] to-yellow-500"
                                >
                                    {word}
                                    {index < array.length - 1 ? " " : ""}
                                </span>
                            ) : (
                                <span key={index}>{word} </span>
                            )
                        )}
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {lead}
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Address and Distances */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Address Card */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-yellow-300 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#7c533a] to-yellow-500 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Gallery</h3>
                                    <address className="not-italic text-gray-600 leading-relaxed">
                                        {addressLines.map((line, index) => (
                                            <div key={index} className="mb-1">
                                                {line}
                                            </div>
                                        ))}
                                    </address>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#7c533a] to-yellow-500 hover:from-[#6e4a31] hover:to-yellow-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            >
                                <Navigation className="w-5 h-5" />
                                Get Directions
                                <svg
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Distances Grid */}
                        {distances?.length > 0 && (
                            <div className="grid grid-cols-2 gap-4">
                                {distances.map((distance, index) => {
                                    const Icon = distance.icon || Clock;
                                    return (
                                        <div
                                            key={`${distance.label}-${index}`}
                                            className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <Icon className="w-5 h-5 text-[#7c533a]" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-600 mb-1">{distance.label}</div>
                                                    <div className="text-lg font-bold text-gray-900">{distance.value}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Right: Media Viewer */}
                    <div className="lg:col-span-7">
                        {/* Tab Controls */}
                        <div className="flex items-center gap-3 mb-6">
                            {visuals?.length > 0 && (
                                <button
                                    onClick={() => setActiveTab("visuals")}
                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "visuals"
                                            ? "bg-gradient-to-r from-[#7c533a] to-yellow-500 text-white shadow-lg"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                        }`}
                                >
                                    <ImageIcon className="w-4 h-4" />
                                    Gallery
                                </button>
                            )}
                            <button
                                onClick={() => setActiveTab("map")}
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "map"
                                        ? "bg-gradient-to-r from-[#7c533a] to-yellow-500 text-white shadow-lg"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                    }`}
                            >
                                <MapPin className="w-4 h-4" />
                                Map View
                            </button>
                        </div>

                        {/* Content Panel */}
                        <div className="relative rounded-3xl overflow-hidden border-2 border-gray-200 bg-gray-50 shadow-xl">
                            {activeTab === "map" ? (
                                <div className="aspect-[16/9] w-full">
                                    {mapEmbedUrl ? (
                                        <iframe
                                            src={mapEmbedUrl}
                                            title="Location map"
                                            className="w-full h-full"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-500 bg-gray-100">
                                            <div className="text-center">
                                                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                                <p>Interactive map will be loaded here</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : visuals?.length ? (
                                <div className="space-y-4">
                                    {/* Main Visual */}
                                    <div className="aspect-[16/9] w-full bg-gray-100 rounded-2xl overflow-hidden">
                                        {currentVisual?.type === "video" ? (
                                            <video
                                                key={currentVisual.src}
                                                src={currentVisual.src}
                                                poster={currentVisual.poster}
                                                className="w-full h-full object-cover"
                                                muted
                                                loop
                                                playsInline
                                                autoPlay
                                                preload="metadata"
                                                onCanPlay={(e) => e.currentTarget.play().catch(() => { })}
                                            />
                                        ) : (
                                            <img
                                                src={currentVisual?.src}
                                                alt={currentVisual?.alt || "Location visual"}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                loading="eager"
                                            />
                                        )}
                                    </div>

                                    {/* Thumbnails */}
                                    {visuals.length > 1 && (
                                        <div className="grid grid-cols-3 gap-3 p-4">
                                            {visuals.map((visual, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setVisualIndex(index)}
                                                    className={`relative aspect-[16/9] overflow-hidden rounded-xl border-2 transition-all duration-300 hover:scale-105 ${index === visualIndex
                                                            ? "border-yellow-500 ring-2 ring-yellow-200"
                                                            : "border-gray-200 hover:border-yellow-300"
                                                        }`}
                                                >
                                                    {visual.type === "video" ? (
                                                        <>
                                                            <video
                                                                src={visual.src}
                                                                className="w-full h-full object-cover"
                                                                muted
                                                                playsInline
                                                                preload="metadata"
                                                            />
                                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                                <Play className="w-6 h-6 text-white" />
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <img
                                                            src={visual.src}
                                                            alt={visual.alt || "thumbnail"}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="aspect-[16/9] w-full flex items-center justify-center text-gray-500">
                                    <div className="text-center">
                                        <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                        <p>Gallery content will be displayed here</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
