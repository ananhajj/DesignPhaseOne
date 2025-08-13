import React, { useState, useEffect } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
    ArrowRight,
    Building2,
    Hammer,
    Users,
    Award,
    Eye,
    Phone,
} from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Welcome to Akdam Constructor",
        subtitle: "Building Excellence Since Day One",
        description:
            "Where architectural dreams meet construction reality. We don't just build structures – we craft legacies that stand the test of time. Your vision, our expertise, extraordinary results.",
        backgroundImage:
            "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        ctaText: "Browse Our Projects",
        ctaIcon: <Eye className="w-5 h-5" />,
        textAlign: "left",
        theme: "dark",
        accent: "from-orange-500 to-red-600",
    },
    {
        id: 2,
        title: "Architectural Masterpieces",
        subtitle: "Innovation Meets Craftsmanship",
        description:
            "From luxury residences to commercial complexes, every Akdam project is a testament to precision engineering and artistic vision. We transform blueprints into breathtaking realities.",
        backgroundImage:
            "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        ctaText: "Explore Portfolio",
        ctaIcon: <Building2 className="w-5 h-5" />,
        textAlign: "center",
        theme: "dark",
        accent: "from-blue-500 to-purple-600",
    },
    {
        id: 3,
        title: "Premium Construction Services",
        subtitle: "Quality Without Compromise",
        description:
            "State-of-the-art equipment, premium materials, and master craftsmen. Every nail, every beam, every detail reflects our unwavering commitment to excellence.",
        backgroundImage:
            "https://images.pexels.com/photos/1083744/pexels-photo-1083744.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        ctaText: "Our Services",
        ctaIcon: <Hammer className="w-5 h-5" />,
        textAlign: "left",
        theme: "dark",
        accent: "from-green-500 to-teal-600",
    },
    {
        id: 4,
        title: "Award-Winning Team",
        subtitle: "Industry Leaders & Innovators",
        description:
            "Our team of architects, engineers, and craftsmen have earned recognition across the industry. When you choose Akdam, you're choosing proven excellence.",
        backgroundImage:
            "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        ctaText: "Meet Our Team",
        ctaIcon: <Users className="w-5 h-5" />,
        textAlign: "left",
        theme: "dark",
        accent: "from-yellow-500 to-orange-600",
    },
    {
        id: 5,
        title: "Start Your Dream Project",
        subtitle: "From Concept to Completion",
        description:
            "Ready to build something extraordinary? Our consultation process begins with understanding your vision and ends with exceeding your expectations. Let's create something amazing together.",
        backgroundImage:
            "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
        ctaText: "Get Free Quote",
        ctaIcon: <Phone className="w-5 h-5" />,
        textAlign: "center",
        theme: "dark",
        accent: "from-purple-500 to-pink-600",
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 9000);
        return () => clearInterval(interval);
      
    }, [isAutoPlaying]);

    const goToSlide = (index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying((s) => !s);
    };

    const currentSlideData = slides[currentSlide];
    const BRAND_GRAD = "from-[#7c533a] to-yellow-500";

    return (
        <section className="relative h-screen overflow-hidden group">
            {/* Background Images with Parallax Effect */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
                            }`}
                        style={{
                            backgroundImage: `url(${slide.backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* Brand Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${BRAND_GRAD} opacity-25`} />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                ))}
            </div>

            {/* Animated Background Elements (brand tint) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#7c533a]/15 rounded-full animate-pulse" />
                <div className="absolute bottom-32 right-20 w-24 h-24 bg-yellow-500/15 rounded-full animate-bounce" />
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-500/15 rounded-full animate-ping" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <div
                        className={`max-w-4xl transition-all duration-1000 ease-out ${currentSlideData.textAlign === "center"
                                ? "mx-auto text-center"
                                : currentSlideData.textAlign === "right"
                                    ? "ml-auto text-right"
                                    : "text-left"
                            } ${isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}
                    >
                        {/* Animated Badge */}
                        <div className="mb-6 overflow-hidden">
                            <div className="inline-block animate-slideInUp">
                                <span
                                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${BRAND_GRAD} text-white text-sm font-bold rounded-full uppercase tracking-wider shadow-2xl transform hover:scale-105 transition-all duration-300`}
                                >
                                    <Award className="w-4 h-4 mr-2" />
                                    {currentSlideData.subtitle}
                                </span>
                            </div>
                        </div>

                        {/* Main Title with Stagger Animation */}
                        <div className="mb-8 overflow-hidden">
                            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-0 leading-none tracking-tight animate-slideInUp animation-delay-200">
                                {currentSlideData.title.split(" ").map((word, index) => (
                                    <span
                                        key={index}
                                        className="inline-block mr-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#7c533a] hover:to-yellow-500 transition-all duration-500"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {word}
                                    </span>
                                ))}
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="mb-10 overflow-hidden">
                            <p
                                className={`text-xl lg:text-2xl xl:text-3xl text-gray-100 leading-relaxed max-w-3xl font-light animate-slideInUp animation-delay-400 ${currentSlideData.textAlign === "center" ? "mx-auto" : ""
                                    }`}
                            >
                                {currentSlideData.description}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="overflow-hidden">
                            <button
                                className={`group inline-flex items-center px-10 py-5 bg-gradient-to-r ${BRAND_GRAD} hover:shadow-2xl text-white font-bold text-lg rounded-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-xl animate-slideInUp animation-delay-600 relative overflow-hidden`}
                            >
                                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative flex items-center">
                                    {currentSlideData.ctaIcon}
                                    <span className="mx-3">{currentSlideData.ctaText}</span>
                                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 z-20 pointer-events-none">
                <button
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="pointer-events-auto p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-7 h-7 transform group-hover:-translate-x-1 transition-transform duration-300" />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="pointer-events-auto p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed group"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-7 h-7 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
                <div className="flex space-x-4 bg-black/20 backdrop-blur-md rounded-full px-6 py-4 border border-white/20">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
                            className={`relative w-4 h-4 rounded-full transition-all duration-500 disabled:cursor-not-allowed ${currentSlide === index
                                    ? `bg-gradient-to-r ${BRAND_GRAD} scale-125 shadow-lg`
                                    : "bg-white/40 hover:bg-white/60 hover:scale-110"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            {currentSlide === index && (
                                <div className={`absolute inset-0 bg-gradient-to-r ${BRAND_GRAD} rounded-full animate-ping opacity-60`} />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Auto-play Control */}
            <button
                onClick={toggleAutoPlay}
                className="absolute bottom-12 right-12 z-20 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:scale-110 group"
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
                {isAutoPlaying ? (
                    <Pause className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                ) : (
                    <Play className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                )}
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-black/30 z-20">
                <div
                    className={`h-full bg-gradient-to-r ${BRAND_GRAD} transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                >
                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                </div>
            </div>

            {/* Slide Counter */}
            <div className="absolute top-12 right-12 z-20 bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <span className="text-white font-bold text-lg">
                    {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
            </div>
        </section>
    );

}
