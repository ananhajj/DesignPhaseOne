import { useEffect, useState, useCallback } from "react";

const NAVIGATION_ITEMS = [
    { id: "about", label: "ABOUT" },
    { id: "project-features", label: "FEATURES" },
    { id: "location", label: "LOCATION" },
    { id: "gallery", label: "GALLERY" },
    { id: "lets-call-you", label: "CONTACT" },
];

export default function HomeSectionNav() {
    const [activeSection, setActiveSection] = useState(NAVIGATION_ITEMS[0].id);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.offsetTop - 120; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    }, []);

    useEffect(() => {
        const sections = NAVIGATION_ITEMS.map((item) =>
            document.getElementById(item.id)
        ).filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: [0.3, 0.5, 0.7],
                rootMargin: "-10% 0px -50% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
                    : "bg-white/90 backdrop-blur-sm border-b border-gray-200"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-center">
                    <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-4 scrollbar-hide">
                        {NAVIGATION_ITEMS.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`group relative whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 ${isActive
                                            ? "text-amber-600"
                                            : "text-gray-700 hover:text-amber-600"
                                        }`}
                                >
                                    <span className="relative z-10">{item.label}</span>

                                    {/* Active indicator */}
                                    <div
                                        className={`absolute inset-0 rounded-lg transition-all duration-300 ${isActive
                                                ? "bg-amber-50 border-2 border-amber-200 scale-100"
                                                : "bg-transparent scale-95 group-hover:bg-amber-50/50 group-hover:scale-100"
                                            }`}
                                    />

                                    {/* Bottom line indicator */}
                                    <div
                                        className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-300 transform -translate-x-1/2 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </nav>
            </div>

            {/* Subtle gradient line */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
        </div>
    );
}
