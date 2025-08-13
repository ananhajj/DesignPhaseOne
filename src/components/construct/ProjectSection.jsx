import {
    Award,
    Calendar,
    ChevronLeft,
    ChevronRight,
    Download,
    ExternalLink,
    Home,
    MapPin,
    Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectSection({
    title,
    subtitle,
    projects = [],
    sectionId,
    background = "light", // light | dark | brand | brandSoft | none
    bgClasses,
}) {
    const navigate = useNavigate();

    // ===== Brand constants (ثابتة لتفادي مشاكل Tailwind JIT) =====
    const BRAND_FROM = "#7c533a";
    const BRAND_TO = "#eab308";
    const GRADIENT_BUTTON = "from-[#7c533a] to-yellow-500"; // ثابت

    const BG_VARIANTS = {
        light: "bg-gradient-to-br from-gray-50 to-white",
        dark: "bg-gradient-to-br from-slate-900 via-gray-900 to-black",
        brand: "bg-gradient-to-br from-[#7c533a] to-yellow-500",
        brandSoft: "bg-gradient-to-br from-amber-50 to-yellow-100",
        none: "",
    };

    const sectionBg = bgClasses ?? BG_VARIANTS[background];
    const isDark = background === "dark" || background === "brand";

    // ===== Scrolling logic =====
    const scrollContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const getCardStride = () => {
        const el = scrollContainerRef.current;
        if (!el) return 0;
        const first = el.children?.[0];
        if (!first) return 0;
        const second = el.children?.[1];
        const gap =
            second ? parseFloat(window.getComputedStyle(second).marginLeft || "0") : 0;
        const cardWidth = first.getBoundingClientRect().width;
        return cardWidth + gap;
    };

    const snapToIndex = (idx) => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const stride = getCardStride();
        const clamped = Math.max(0, Math.min(idx, projects.length - 1));
        el.scrollTo({ left: clamped * stride, behavior: "smooth" });
        setCurrentIndex(clamped);
    };

    const scrollLeft = () => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const stride = getCardStride();
        const idx = Math.round(el.scrollLeft / stride);
        snapToIndex(idx - 1);
    };

    const scrollRight = () => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const stride = getCardStride();
        const idx = Math.round(el.scrollLeft / stride);
        snapToIndex(idx + 1);
    };

    const updateScrollState = () => {
        const el = scrollContainerRef.current;
        if (!el) return;
        const stride = getCardStride();
        const idx = stride > 0 ? Math.round(el.scrollLeft / stride) : 0;
        setCurrentIndex(idx);

        const nearStart = el.scrollLeft <= 1;
        const nearEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
        setCanScrollLeft(!nearStart);
        setCanScrollRight(!nearEnd);
    };

    useEffect(() => {
        updateScrollState();
        const el = scrollContainerRef.current;
        if (!el) return;

        el.addEventListener("scroll", updateScrollState, { passive: true });
        window.addEventListener("resize", updateScrollState);

        return () => {
            el.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projects?.length]);

    // ===== Pagination dots =====
    const pageSize = 3;
    const pageCount = Math.max(1, Math.ceil(projects.length / pageSize));
    const currentPage = Math.floor(currentIndex / pageSize);

    // ===== Helpers =====
    const getStatusColor = (status) => {
        switch (status) {
            case "completed":
                return "bg-gradient-to-r from-[#7c533a] to-yellow-500 text-white";
            case "ongoing":
                return "bg-yellow-500 text-black";
            case "upcoming":
                return "bg-[#7c533a]/10 text-[#7c533a] ring-1 ring-[#7c533a]/20";
            default:
                return "bg-gray-200 text-gray-800";
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case "completed":
                return "Completed";
            case "ongoing":
                return "In Progress";
            case "upcoming":
                return "Upcoming";
            default:
                return "Unknown";
        }
    };

    return (
        <section id={sectionId} className={`py-20 relative overflow-hidden ${sectionBg}`}>
            {/* Background brand bubbles: تظهر فقط مع الخلفية الداكنة */}
            {isDark && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#7c533a]/15 to-yellow-500/15 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-yellow-500/15 to-[#7c533a]/15 rounded-full opacity-60 animate-bounce"></div>
                </div>
            )}

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span
                            className="relative inline-flex items-center px-5 py-2.5
              bg-gradient-to-r from-[#7c533a] to-yellow-500
              text-white text-xs sm:text-sm font-semibold rounded-full uppercase tracking-wider
              shadow-lg shadow-[#7c533a]/20 ring-1 ring-white/10
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            <Award className="w-4 h-4 mr-2 drop-shadow-sm" />
                            {subtitle}
                        </span>
                    </div>

                    <h2
                        className={`text-5xl lg:text-6xl font-black mb-6 leading-tight ${isDark ? "text-white" : "text-gray-900"
                            }`}
                    >
                        {title.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className="inline-block mr-4 transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#7c533a] hover:to-yellow-500"
                            >
                                {word}
                            </span>
                        ))}
                    </h2>

                    <p
                        className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"
                            }`}
                    >
                        Discover our portfolio of exceptional construction projects that
                        showcase innovation, quality, and architectural excellence.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={scrollLeft}
                            disabled={!canScrollLeft}
                            aria-label="Previous"
                            className={`group inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold
              text-white bg-gradient-to-r ${GRADIENT_BUTTON}
              hover:opacity-95 active:scale-[.98] shadow-sm hover:shadow-md transition-all
              disabled:opacity-40 disabled:cursor-not-allowed`}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={scrollRight}
                            disabled={!canScrollRight}
                            aria-label="Next"
                            className="group inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold
              bg-white border border-gray-200 text-gray-700
              hover:bg-white/90 hover:border-yellow-300 active:scale-[.98]
              shadow-sm hover:shadow-md transition-all
              disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-5 h-5 text-[#7c533a] group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold
              text-white bg-gradient-to-r from-[#7c533a] to-yellow-500
              hover:from-[#6e4a31] hover:to-yellow-400 active:scale-[.98]
              shadow-sm hover:shadow-md transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            <Download className="w-4 h-4" />
                            <span className="hidden xs:inline">Download Project Catalog</span>
                            <span className="xs:hidden">Download</span>
                        </button>

                        <button
                            className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold
              text-[#7c533a] bg-[#7c533a]/10 border border-[#7c533a]/20
              hover:bg-[#7c533a]/15 hover:border-[#7c533a]/30 active:scale-[.98]
              shadow-sm hover:shadow-md transition-all
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                            onClick={() => navigate("/")}
                        >
                            <Home className="w-4 h-4" />
                            <span className="hidden xs:inline">Go to Project Home Page</span>
                            <span className="xs:hidden">Project Home</span>
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div
                    ref={scrollContainerRef}
                    className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex-none w-96 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden snap-start"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`inline-flex items-center px-3 py-1 ${getStatusColor(
                                            project.status
                                        )} text-xs font-bold rounded-full ring-1 ring-black/5`}
                                    >
                                        {getStatusText(project.status)}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300">
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-3">
                                    <span
                                        className="inline-block px-3 py-1 text-white text-xs font-semibold rounded-full ring-1 ring-black/5"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(to right, #8a6246, #d6a461)",
                                        }}
                                    >
                                        {project.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7c533a] group-hover:to-yellow-500 transition-all duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        <span>{project.year}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Users className="w-4 h-4 mr-2" />
                                        <span>{project.client}</span>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Project Area</span>
                                        <span className="font-semibold text-gray-900">
                                            {project.area}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-8">
                    <div className="flex space-x-2">
                        {Array.from({ length: pageCount }).map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentPage === index
                                    ? `bg-gradient-to-r ${GRADIENT_BUTTON}`
                                    : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
