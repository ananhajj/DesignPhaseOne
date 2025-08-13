import React, { useEffect, useRef, useState } from "react";
import { FileDown, Building, TreePine, Ruler } from "lucide-react";
import Container from "../ui/Container";


// ---------- Hooks ----------
function useInView(ref, rootMargin = "0px 0px -20% 0px") {
    const [inView, setInView] = useState(false);
   
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { root: null, rootMargin, threshold: 0.1 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, rootMargin]);

    return inView;
}

function useCountUp(target, inView, duration = 2000) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(easeOutCubic * (Number(target) || 0)));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        const raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [target, inView, duration]);

    return value;
}

// ---------- Defaults ----------
const defaultStats = [
    { label: "Luxury Villas", value: 99, icon: Building, suffix: "" },
    { label: "Premium Residences", value: 78, icon: Building, suffix: "" },
    { label: "Green Landscape", value: 4000, icon: TreePine, suffix: "m²" },
    { label: "Total Development", value: 58950, icon: Ruler, suffix: "m²" },
];

// ---------- Pieces ----------
function StatCard({ stat, index, inView }) {
    const countedValue = useCountUp(stat.value, inView, 1500 + index * 200);
    const Icon = stat.icon || Building;

    return (
        <div
            className="text-center group hover:scale-105 transition-transform duration-300"
        >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-400/20 rounded-2xl mb-4 group-hover:border-amber-400/40 transition-colors">
                <Icon className="w-8 h-8 text-amber-400" />
            </div>

            <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tabular-nums">
                {countedValue.toLocaleString()}
                {stat.suffix}
            </div>

            <div className="text-sm uppercase tracking-widest text-gray-400 font-medium">
                {stat.label}
            </div>
        </div>
    );
}

// ---------- Component ----------
export default function ProjectOverviewSection({
    eyebrow = "PROJECT FEATURES",
    title = "A sanctuary where nature meets luxury design",
    intro = "Experience living spaces that harmoniously blend with nature, featuring meticulously crafted details and sustainable architecture.",
    stats = defaultStats,
    paragraphs = [
        "Our masterfully designed landscape integrates walking trails, meditation gardens, and natural terraces that invite you to reconnect with nature while enjoying modern luxury amenities.",
        "The adjacent Hotel & Residences will feature world-class suites and apartments, complemented by exclusive concierge services and lifestyle amenities.",
    ],
    catalogUrl = "/files/project-catalog.pdf",
}) {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef);

    return (
        <section
            id="project-features"
            ref={sectionRef}
            className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
            </div>

            <Container className="relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-20">
                    <div className="flex-grow max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 border border-amber-400/20">
                            <Building className="w-4 h-4" />
                            {eyebrow}
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                            {title}
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            {intro}
                        </p>
                    </div>

                    {/* Download Button */}
                    <div className="flex-shrink-0">
                        <a
                            href={catalogUrl}
                            download
                            className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                        >
                            <FileDown className="h-5 w-5 group-hover:animate-bounce" />
                            <div className="text-left">
                                <div className="text-sm font-medium">DOWNLOAD</div>
                                <div className="text-xs opacity-90">Project Catalog</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 ">
                    {stats.map((stat, index) => (
                        <StatCard key={`${stat.label}-${index}`} stat={stat} index={index} inView={inView} />
                    ))}
                </div>

                {/* Content Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Spacer for layout */}
                    <div className="hidden lg:block lg:col-span-4" />

                    {/* Text Content */}
                    <div className="lg:col-span-8 space-y-8">
                        {paragraphs.map((paragraph, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-4 top-2 w-1 h-6 bg-gradient-to-b from-amber-500 to-yellow-500 rounded-full" />
                                <p className="text-lg text-gray-300 leading-relaxed pl-8">
                                    {paragraph}
                                </p>
                            </div>
                        ))}

                        {/* Additional CTA */}
                        <div className="pt-8">
                            <button className="group inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                                Discover More Features
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
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
