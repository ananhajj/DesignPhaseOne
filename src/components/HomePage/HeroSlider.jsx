import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const DEFAULT_SLIDES = [
    {
        id: 1,
        kind: "image",
        src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        title: "Akdam Luxury Living",
        subtitle: "Where Dreams Take Shape",
        description:
            "Experience the pinnacle of modern living with breathtaking architecture and unparalleled comfort",
    },
    {
        id: 2,
        type: "video",
        src: "https://player.cloudinary.com/embed/?cloud_name=dgbdudxqm&public_id=Gray_Simple_Interior_Design_Mobile_Video_skbxys&profile=cld-default",
        poster:
            "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        title: "Crafted to Perfection",
        subtitle: "Interior Excellence",
        description:
            "Witness the meticulous attention to detail in every corner of your future home",
    },
    {
        id: 3,
        kind: "image",
        src: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        title: "Prime Istanbul Location",
        subtitle: "Connected to Everything",
        description:
            "Minutes from the city's finest shopping, dining, and cultural attractions",
    },
];

export default function HeroSlider({ slides = DEFAULT_SLIDES, intervalMs = 7000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRefs = useRef([]);

    const reduceMotion = useMemo(
        () =>
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
        []
    );

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay || reduceMotion) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, intervalMs);
        return () => clearInterval(timer);
    }, [isAutoPlay, intervalMs, slides.length, reduceMotion]);

    // Video handling
    useEffect(() => {
        videoRefs.current.forEach((video, idx) => {
            if (!video) return;
            if (idx === currentIndex) {
                video.currentTime = 0;
                video.play().catch(() => { });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }, [currentIndex]);

    // Loading effect
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section
            className="relative overflow-hidden h-[85vh] lg:h-screen"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            {/* Slides */}
            {slides.map((slide, idx) => {
                const isActive = idx === currentIndex;
                const mediaType = slide.kind ?? slide.type;

                return (
                    <div
                        key={slide.id ?? idx}
                        className={`absolute inset-0 transition-all duration-1000 ease-out transform ${isActive
                                ? "translate-x-0 opacity-100 scale-100"
                                : idx < currentIndex
                                    ? "-translate-x-full opacity-0 scale-105"
                                    : "translate-x-full opacity-0 scale-105"
                            }`}
                        aria-hidden={!isActive}
                    >
                        <div className="relative w-full h-full">
                            {/* Media Content */}
                            {mediaType === "video" ? (
                                slide.src.includes("youtube.com") ||
                                    slide.src.includes("youtu.be") ? (
                                    <iframe
                                        className="w-full h-full object-cover"
                                        src={`${slide.src}${slide.src.includes("?") ? "&" : "?"
                                            }autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0`}
                                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                        frameBorder="0"
                                        loading="lazy"
                                        title={slide.title || "Video"}
                                    />
                                ) : slide.src.includes("player.cloudinary.com") ? (
                                    <iframe
                                        className="w-full h-full object-cover"
                                        src={`${slide.src}${slide.src.includes("?") ? "&" : "?"
                                            }autoplay=true&mute=true&loop=true&controls=false`}
                                        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                        frameBorder="0"
                                        loading="lazy"
                                        title={slide.title || "Cloudinary Video"}
                                    />
                                ) : (
                                    <video
                                        ref={(el) => (videoRefs.current[idx] = el)}
                                        className="w-full h-full object-cover"
                                        src={slide.src}
                                        poster={slide.poster}
                                        muted
                                        playsInline
                                        loop
                                        autoPlay
                                    />
                                )
                            ) : (
                                <img
                                    src={slide.src}
                                    alt={slide.title ?? "Slide"}
                                    className="w-full h-full object-cover transition-transform duration-[10s] ease-out hover:scale-105"
                                    loading={idx === 0 ? "eager" : "lazy"}
                                />
                            )}

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="max-w-4xl">
                                        {slide.title && (
                                            <h1
                                                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 transition-all duration-1000 ${isActive && isLoaded
                                                        ? "translate-y-0 opacity-100"
                                                        : "translate-y-8 opacity-0"
                                                    }`}
                                                style={{
                                                    transitionDelay: isActive ? "300ms" : "0ms",
                                                }}
                                            >
                                                {slide.title}
                                            </h1>
                                        )}
                                        {slide.subtitle && (
                                            <p
                                                className={`text-xl sm:text-2xl md:text-3xl text-yellow-400 font-light mb-4 transition-all duration-1000 ${isActive && isLoaded
                                                        ? "translate-y-0 opacity-100"
                                                        : "translate-y-8 opacity-0"
                                                    }`}
                                                style={{
                                                    transitionDelay: isActive ? "500ms" : "0ms",
                                                }}
                                            >
                                                {slide.subtitle}
                                            </p>
                                        )}
                                        {slide.description && (
                                            <p
                                                className={`text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed transition-all duration-1000 ${isActive && isLoaded
                                                        ? "translate-y-0 opacity-100"
                                                        : "translate-y-8 opacity-0"
                                                    }`}
                                                style={{
                                                    transitionDelay: isActive ? "700ms" : "0ms",
                                                }}
                                            >
                                                {slide.description}
                                            </p>
                                        )}

                                        <div
                                            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${isActive && isLoaded
                                                    ? "translate-y-0 opacity-100"
                                                    : "translate-y-8 opacity-0"
                                                }`}
                                            style={{
                                                transitionDelay: isActive ? "900ms" : "0ms",
                                            }}
                                        >
                                            <button className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                                <span className="flex items-center justify-center gap-2">
                                                    Explore Project
                                                    <svg
                                                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                                                Schedule Visit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 group"
                aria-label="Previous slide"
            >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                    <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 group"
                aria-label="Next slide"
            >
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                    <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className="group relative"
                    >
                        <div
                            className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex
                                    ? "w-12 bg-white shadow-lg"
                                    : "w-2 bg-white/50 hover:bg-white/70 hover:w-4"
                                }`}
                        >
                            {idx === currentIndex && (
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-pulse" />
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Auto-play Control */}
            <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="absolute top-6 right-6 group"
                aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
            >
                <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/30 hover:bg-black/50 hover:border-white/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                    {isAutoPlay ? (
                        <Pause className="w-5 h-5 text-white" />
                    ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                    )}
                </div>
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-8 right-8 px-4 py-2 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium">
                <span className="text-yellow-400">{currentIndex + 1}</span>
                <span className="text-white/70 mx-1">of</span>
                <span className="text-white/70">{slides.length}</span>
            </div>
        </section>
    );
}
