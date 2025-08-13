import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
    ArrowLeft,
    MapPin,
    Building,
    Calendar,
    Users,
    ChevronLeft,
    ChevronRight,
    Download,
    Eye,
    Star,
    Image as ImageIcon,
    Filter,
    X,
    ArrowUpDown,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/project";

// ===== Brand =====
const BRAND_GRAD = "bg-gradient-to-r from-[#7c533a] to-[#eab308]";
const BRAND_TEXT = "text-[#7c533a]";

// ===== Helpers =====
const normalizeProjectStatus = (raw = "") => {
    const s = String(raw).toLowerCase();
    if (["ready", "completed", "delivered", "done"].some((k) => s.includes(k)))
        return "Completed";
    if (
        ["under construction", "ongoing", "in progress", "construction"].some((k) =>
            s.includes(k)
        )
    )
        return "In Progress";
    if (["upcoming", "future", "planned"].some((k) => s.includes(k)))
        return "Upcoming";
    return "Other";
};

const projectStatusChip = (status) => {
    switch (status) {
        case "Completed":
            return "bg-emerald-100 text-emerald-800 border border-emerald-200";
        case "In Progress":
            return "bg-amber-100 text-amber-900 border border-amber-200";
        case "Upcoming":
            return "bg-sky-100 text-sky-800 border border-sky-200";
        default:
            return "bg-gray-100 text-gray-700 border border-gray-200";
    }
};

const unitStatusChip = (status) => {
    switch (status) {
        case "Available":
            return "bg-emerald-100 text-emerald-800 border border-emerald-200";
        case "Reserved":
            return "bg-amber-100 text-amber-900 border border-amber-200";
        case "Sold":
            return "bg-rose-100 text-rose-800 border border-rose-200";
        default:
            return "bg-gray-100 text-gray-700 border border-gray-200";
    }
};

// Capsule button
const Pill = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition
      ${active
                ? "text-white " + BRAND_GRAD + " shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:bg-amber-50"
            }`}
    >
        {children}
    </button>
);

const ProjectDetails = ({ onReserveUnit, onContact, onScheduleVisit, onDownloadBrochure }) => {
    const navigate = useNavigate();
    const { id } = useParams();

    // ---- Data guard ----
    const project = useMemo(
        () => projects.find((p) => String(p.id) === String(id)),
        [id]
    );

    // If not found
    if (!project) {
        return (
            <div className="min-h-[50vh] grid place-items-center">
                <div className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-xl bg-amber-100 text-amber-800 grid place-items-center mb-4">
                        <ImageIcon className="w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Project not found</h1>
                    <p className="text-gray-600 mb-6">The project you’re looking for doesn’t exist or has been removed.</p>
                    <button
                        onClick={() => navigate("/akdam-construct/projects")}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white ${BRAND_GRAD}`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </button>
                </div>
            </div>
        );
    }

    const normalizedStatus = normalizeProjectStatus(project.status);

    // ---- Gallery ----
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = project.images || [];
    const nextImage = useCallback(
        () => setCurrentImageIndex((i) => (i + 1) % images.length),
        [images.length]
    );
    const prevImage = useCallback(
        () => setCurrentImageIndex((i) => (i - 1 + images.length) % images.length),
        [images.length]
    );

    // keyboard arrows
    useEffect(() => {
        const h = (e) => {
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
        };
        window.addEventListener("keydown", h);
        return () => window.removeEventListener("keydown", h);
    }, [nextImage, prevImage]);

    // ---- Units filters ----
    const allUnitTypes = useMemo(
        () => ["All", ...(project.unitTypes || [])],
        [project.unitTypes]
    );
    const [selectedUnitType, setSelectedUnitType] = useState("All");
    const [unitStatusFilter, setUnitStatusFilter] = useState("All"); // Available/Reserved/Sold/All
    const [unitSort, setUnitSort] = useState("priceAsc"); // priceAsc | priceDesc | areaAsc | areaDesc

    const filteredUnits = useMemo(() => {
        let list = [...(project.units || [])];
        if (selectedUnitType !== "All") {
            list = list.filter((u) => u.type === selectedUnitType);
        }
        if (unitStatusFilter !== "All") {
            list = list.filter((u) => u.status === unitStatusFilter);
        }
        switch (unitSort) {
            case "priceAsc":
                list.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
                break;
            case "priceDesc":
                list.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
                break;
            case "areaAsc":
                list.sort((a, b) => (a.area ?? 0) - (b.area ?? 0));
                break;
            case "areaDesc":
                list.sort((a, b) => (b.area ?? 0) - (a.area ?? 0));
                break;
            default:
                break;
        }
        return list;
    }, [project.units, selectedUnitType, unitStatusFilter, unitSort]);

    const clearUnitFilters = () => {
        setSelectedUnitType("All");
        setUnitStatusFilter("All");
        setUnitSort("priceAsc");
    };

    // ---- CTA handlers fallback ----
    const handleReserve = (unitId) => {
        if (typeof onReserveUnit === "function") onReserveUnit(unitId);
        else console.warn("onReserveUnit not provided", unitId);
    };
    const handleContact = () => {
        if (typeof onContact === "function") onContact(project);
        else console.warn("onContact not provided");
    };
    const handleVisit = () => {
        if (typeof onScheduleVisit === "function") onScheduleVisit(project);
        else console.warn("onScheduleVisit not provided");
    };
    const handleDownload = () => {
        if (typeof onDownloadBrochure === "function") onDownloadBrochure(project);
        else console.warn("onDownloadBrochure not provided");
    };

    // ---- Refs for scroll ----
    const unitsRef = useRef(null);
    const scrollToUnits = () => unitsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <div className="py-10 bg-gradient-to-br from-amber-50 via-white to-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back */}
                <button
                    onClick={() => navigate("/akdam-construct/projects")}
                    className="flex items-center text-gray-600 hover:text-[#7c533a] mb-6 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Projects
                </button>

                {/* Header Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                    {/* Gallery */}
                    <div className="relative">
                        <div className="h-[420px] overflow-hidden">
                            <img
                                src={images[currentImageIndex]}
                                alt={`${project.name} ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/70 transition"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/70 transition"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </>
                        )}

                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="absolute bottom-4 left-0 right-0 px-4">
                                <div className="mx-auto max-w-4xl bg-white/70 backdrop-blur rounded-xl p-2 border border-white/60">
                                    <div className="flex gap-2 overflow-x-auto">
                                        {images.map((src, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentImageIndex(i)}
                                                className={`relative w-20 h-14 rounded-md overflow-hidden border ${i === currentImageIndex
                                                        ? "border-[#7c533a]"
                                                        : "border-white"
                                                    }`}
                                                aria-label={`Go to image ${i + 1}`}
                                            >
                                                <img
                                                    src={src}
                                                    alt={`thumb ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Status */}
                        <div className="absolute top-4 left-4">
                            <span
                                className={`px-3 py-1 text-sm font-semibold rounded-full ${projectStatusChip(
                                    normalizedStatus
                                )}`}
                            >
                                {normalizedStatus}
                            </span>
                        </div>
                    </div>

                    {/* Top content */}
                    <div className="p-6 lg:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left: title + meta + description */}
                            <div className="lg:col-span-2">
                                <h1 className="text-3xl font-black text-gray-900 mb-4">
                                    {project.name}
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="h-5 w-5 mr-3 text-yellow-600" />
                                        <span>
                                            {project.location}
                                            {project.city ? ` • ${project.city}` : ""}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Building className="h-5 w-5 mr-3 text-yellow-600" />
                                        <span>{(project.unitTypes || []).join(", ")} Units</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="h-5 w-5 mr-3 text-yellow-600" />
                                        <span>Completion: {project.completionDate || "—"}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Users className="h-5 w-5 mr-3 text-yellow-600" />
                                        <span>
                                            {project.availableUnits} of {project.totalUnits} Available
                                        </span>
                                    </div>
                                </div>

                                {project.description && (
                                    <div className="mb-6">
                                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                                            About This Project
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                )}

                                {Array.isArray(project.features) && project.features.length > 0 && (
                                    <div className="mb-2">
                                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                                            Project Features
                                        </h2>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {project.features.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center bg-gray-50 border border-gray-200 p-3 rounded-lg"
                                                >
                                                    <Star className="h-4 w-4 text-yellow-600 mr-2" />
                                                    <span className="text-sm text-gray-800">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right: sticky pricing card */}
                            <aside className="lg:col-span-1">
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-8">
                                    <div className="text-center mb-6">
                                        <div className="text-3xl font-extrabold text-gray-900 mb-1">
                                            {typeof project.priceRange?.min === "number" &&
                                                typeof project.priceRange?.max === "number"
                                                ? `$${project.priceRange.min.toLocaleString()} - $${project.priceRange.max.toLocaleString()}`
                                                : "Contact for pricing"}
                                        </div>
                                        <div className="text-sm text-gray-600">Price Range</div>
                                    </div>

                                    <div className="space-y-3 mb-6 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Status:</span>
                                            <span className="font-semibold">{normalizedStatus}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Total Units:</span>
                                            <span className="font-semibold">{project.totalUnits}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Available:</span>
                                            <span className="font-semibold text-emerald-700">
                                                {project.availableUnits}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Completion:</span>
                                            <span className="font-semibold">
                                                {project.completionDate || "—"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <button
                                            onClick={handleContact}
                                            className={`w-full ${BRAND_GRAD} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-95 transition`}
                                        >
                                            Contact Sales Team
                                        </button>

                                        <button
                                            onClick={handleVisit}
                                            className="w-full border-2 border-[#7c533a] text-[#7c533a] px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition"
                                        >
                                            Schedule Site Visit
                                        </button>

                                        <button
                                            onClick={handleDownload}
                                            className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2"
                                        >
                                            <Download className="h-4 w-4" />
                                            Download Brochure
                                        </button>

                                        <button
                                            onClick={scrollToUnits}
                                            className="w-full text-sm text-gray-600 underline hover:text-gray-800"
                                        >
                                            Jump to Available Units
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>

                {/* Units */}
                <section ref={unitsRef} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Available Units</h2>

                        <div className="flex flex-wrap items-center gap-3">
                            {/* Type Pills */}
                            <div className="flex flex-wrap items-center gap-2">
                                {allUnitTypes.map((t) => (
                                    <Pill
                                        key={t}
                                        active={selectedUnitType === t}
                                        onClick={() => setSelectedUnitType(t)}
                                    >
                                        {t}
                                    </Pill>
                                ))}
                            </div>

                            {/* Status Filter */}
                            <select
                                value={unitStatusFilter}
                                onChange={(e) => setUnitStatusFilter(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                            >
                                {["All", "Available", "Reserved", "Sold"].map((s) => (
                                    <option key={s} value={s}>
                                        Status: {s}
                                    </option>
                                ))}
                            </select>

                            {/* Sort */}
                            <div className="flex items-center gap-2">
                                <ArrowUpDown className="h-4 w-4 text-gray-400" />
                                <select
                                    value={unitSort}
                                    onChange={(e) => setUnitSort(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                                >
                                    <option value="priceAsc">Price: Low → High</option>
                                    <option value="priceDesc">Price: High → Low</option>
                                    <option value="areaAsc">Area: Small → Large</option>
                                    <option value="areaDesc">Area: Large → Small</option>
                                </select>
                            </div>

                            {/* Clear */}
                            <button
                                onClick={clearUnitFilters}
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm"
                                title="Clear unit filters"
                            >
                                <X className="h-4 w-4" />
                                Clear
                            </button>
                        </div>
                    </div>

                    {filteredUnits.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredUnits.map((unit) => (
                                <div
                                    key={unit.id}
                                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-lg font-bold text-gray-900">{unit.type}</div>
                                        <span
                                            className={`px-2.5 py-1 text-xs font-semibold rounded-full ${unitStatusChip(
                                                unit.status
                                            )}`}
                                        >
                                            {unit.status}
                                        </span>
                                    </div>

                                    <div className="space-y-2 mb-4 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Floor:</span>
                                            <span className="font-medium">{unit.floor ?? "—"}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Area:</span>
                                            <span className="font-medium">
                                                {typeof unit.area === "number" ? `${unit.area} m²` : "—"}
                                            </span>
                                        </div>
                                        {unit.view && (
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">View:</span>
                                                <span className="font-medium">{unit.view}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Balcony:</span>
                                            <span className="font-medium">{unit.balcony ? "Yes" : "No"}</span>
                                        </div>
                                    </div>

                                    <div className="text-xl font-extrabold text-gray-900 mb-4">
                                        {typeof unit.price === "number"
                                            ? `$${unit.price.toLocaleString()}`
                                            : "Contact for price"}
                                    </div>

                                    <div className="space-y-2">
                                        {unit.floorPlan && (
                                            <button
                                                onClick={() => {
                                                    // TODO: افتح مودال معاينة / أو حمّل الملف
                                                    console.log("View floor plan:", unit.floorPlan);
                                                }}
                                                className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
                                            >
                                                <Eye className="h-4 w-4" />
                                                View Floor Plan
                                            </button>
                                        )}

                                        <button
                                            onClick={() => handleReserve(unit.id)}
                                            disabled={unit.status !== "Available"}
                                            className={`w-full px-4 py-2 rounded-lg font-semibold transition ${unit.status === "Available"
                                                    ? `${BRAND_GRAD} text-white hover:opacity-95`
                                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                                }`}
                                        >
                                            {unit.status === "Available" ? "Reserve Unit" : unit.status}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="border border-gray-200 rounded-xl p-10 text-center">
                            <div className="mx-auto w-12 h-12 rounded-xl bg-amber-100 text-amber-800 grid place-items-center mb-4">
                                <Filter className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                No units match your filters
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Try adjusting unit type, status, or sorting options.
                            </p>
                            <button
                                onClick={clearUnitFilters}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                            >
                                <X className="h-4 w-4" />
                                Reset unit filters
                            </button>
                        </div>
                    )}
                </section>

                {/* Optional: Floor plans gallery (big) */}
                {Array.isArray(project.floorPlans) && project.floorPlans.length > 0 && (
                    <section className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Floor Plans</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.floorPlans.map((plan, i) => (
                                <div key={i} className="relative group">
                                    <img
                                        src={plan}
                                        alt={`Floor plan ${i + 1}`}
                                        className="w-full h-56 object-cover rounded-lg"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition rounded-lg grid place-items-center">
                                        <button
                                            onClick={() => console.log("Download floor plan:", plan)}
                                            className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2"
                                        >
                                            <Download className="h-4 w-4" />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;
