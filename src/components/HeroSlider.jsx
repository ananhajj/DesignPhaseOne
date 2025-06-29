import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        title: 'Sunset Heights',
        subtitle: 'Luxury Living in North Cyprus',
        description: 'Experience premium beachfront living with stunning Mediterranean views'
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        title: 'Modern Interiors',
        subtitle: 'European Standard Finishes',
        description: 'Elegant design meets contemporary comfort in every detail'
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        title: 'Prime Location',
        subtitle: 'Central Famagusta',
        description: 'Minutes from the beach, shopping, and cultural attractions'
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        title: 'Architectural Excellence',
        subtitle: 'Award-Winning Design',
        description: 'Modern architecture that defines the Famagusta skyline'
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                        }`}
                >
                    <div className="relative h-full">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white max-w-4xl mx-auto px-4">
                                <h1 className="text-5xl md:text-7xl font-bold mb-4 opacity-0 animate-fade-in-up">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl mb-2 opacity-0 animate-fade-in-up animation-delay-200">
                                    {slide.subtitle}
                                </p>
                                <p className="text-lg mb-8 opacity-0 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto">
                                    {slide.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600">
                                    <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Explore Project
                                    </button>
                                    <button className="bg-amber-500 hover:bg-amber-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Reserve Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Auto-play Toggle */}
            <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
            >
                <Play className={`w-4 h-4 text-white ${isAutoPlaying ? 'opacity-100' : 'opacity-50'}`} />
            </button>
        </div>
    );
}
