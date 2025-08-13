// src/pages/OngoingProjectsPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
    Search,
    Filter,
    MapPin,
    Building,
    Calendar,
    Eye,
    ArrowUpDown,
    X,
    Layers,
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { projects } from "../data/projects";

/**
 * توقّع شكل كائن المشروع:
 * {
 *   id, name, location, city, status, coverImage,
 *   unitTypes: string[], completionDate: string,
 *   availableUnits: number, totalUnits: number,
 *   priceRange: { min: number, max: number }
 * }
 *
 * props:
 * - projects: Array<Project>
 * - onViewProject?: (id) => void  // بديل للراوتر إن رغبت
 */

const BRAND_GRAD = "bg-gradient-to-r from-[#7c533a] to-[#eab308]";

const normalizeStatus = (raw = "") => {
    const s = String(raw).toLowerCase();
    if (
        ["under construction", "ongoing", "in progress", "construction"].some((k) =>
            s.includes(k)
        )
    )
        return "In Progress";
    if (["ready", "completed", "delivered", "done"].some((k) => s.includes(k)))
        return "Completed";
    if (["upcoming", "future", "planned"].some((k) => s.includes(k)))
        return "Upcoming";
    return "Other";
};

const statusChip = (status) => {
    switch (status) {
        case "In Progress":
            return "bg-amber-100 text-amber-900 border border-amber-200";
        case "Completed":
            return "bg-emerald-100 text-emerald-800 border border-emerald-200";
        case "Upcoming":
            return "bg-sky-100 text-sky-800 border border-sky-200";
        default:
            return "bg-gray-100 text-gray-700 border border-gray-200";
    }
};

const Stat = ({ label, value }) => (
    <div className="rounded-xl border border-gray-200 bg-white p-4 text-center">
        <div className="text-2xl font-extrabold text-gray-900">{value}</div>
        <div className="text-xs text-gray-600 mt-1">{label}</div>
    </div>
);

export default function OngoingProjectsPage() {
    
    const ongoing = useMemo(
        () => projects.filter((p) => normalizeStatus(p.status) === "In Progress"),
        [projects]
    );

    // ------- State -------
    const [searchTerm, setSearchTerm] = useState("");
    const [cityFilter, setCityFilter] = useState("All");
    const [sortBy, setSortBy] = useState("relevance"); // priceAsc | priceDesc | newest
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 6;

    // ------- Derived -------
    const cities = useMemo(() => {
        const s = new Set(ongoing.map((p) => p.city).filter(Boolean));
        return ["All", ...Array.from(s)];
    }, [ongoing]);

    const filtered = useMemo(() => {
        const term = searchTerm.toLowerCase().trim();
        let list = ongoing;

        if (term) {
            list = list.filter(
                (p) =>
                    p.name.toLowerCase().includes(term) ||
                    (p.location || "").toLowerCase().includes(term) ||
                    (p.city || "").toLowerCase().includes(term) ||
                    (p.unitTypes || []).join(",").toLowerCase().includes(term)
            );
        }
        if (cityFilter !== "All") {
            list = list.filter((p) => p.city === cityFilter);
        }

        // Sort
        list = [...list];
        if (sortBy === "priceAsc") {
            list.sort(
                (a, b) => (a.priceRange?.min ?? 0) - (b.priceRange?.min ?? 0)
            );
        } else if (sortBy === "priceDesc") {
            list.sort(
                (a, b) => (b.priceRange?.min ?? 0) - (a.priceRange?.min ?? 0)
            );
        } else if (sortBy === "newest") {
            list.sort(
                (a, b) => new Date(b.completionDate) - new Date(a.completionDate)
            );
        }
        return list;
    }, [ongoing, searchTerm, cityFilter, sortBy]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
    const start = (currentPage - 1) * perPage;
    const pageItems = filtered.slice(start, start + perPage);

    useEffect(() => setCurrentPage(1), [searchTerm, cityFilter, sortBy]);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    const clearFilters = () => {
        setSearchTerm("");
        setCityFilter("All");
        setSortBy("relevance");
        setCurrentPage(1);
    };

    // ------- Metrics -------
    const totalUnits = ongoing.reduce((sum, p) => sum + (p.totalUnits || 0), 0);
    const availableUnits = ongoing.reduce(
        (sum, p) => sum + (p.availableUnits || 0),
        0
    );

    return (
        <div className="min-h-screen py-14 bg-gradient-to-br from-amber-50 via-white to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <header className="mb-8">
                    <div className="text-xs font-semibold tracking-widest text-[#7c533a] uppercase">
                        Projects
                    </div>
                    <h1 className="mt-2 text-3xl sm:text-4xl font-black text-gray-900">
                        On-Going Projects
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Discover our current developments in progress — filtered, sortable,
                        and always up to date.
                    </p>
                </header>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    <Stat label="Projects In Progress" value={ongoing.length} />
                    <Stat label="Total Units" value={totalUnits} />
                    <Stat label="Available Units" value={availableUnits} />
                    <Stat
                        label="Avg. Min Price"
                        value={
                            ongoing.length
                                ? `$${Math.round(
                                    ongoing.reduce((s, p) => s + (p.priceRange?.min ?? 0), 0) /
                                    ongoing.length
                                ).toLocaleString()}`
                                : "—"
                        }
                    />
                </div>

                {/* Filters Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        {/* Search */}
                        <div className="md:col-span-6 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search by name, city, or location…"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                        </div>

                        {/* City */}
                        <div className="md:col-span-3">
                            <select
                                value={cityFilter}
                                onChange={(e) => setCityFilter(e.target.value)}
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                            >
                                {cities.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2">
                                <ArrowUpDown className="h-5 w-5 text-gray-400" />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                                >
                                    <option value="relevance">Sort: Relevance</option>
                                    <option value="priceAsc">Price: Low to High</option>
                                    <option value="priceDesc">Price: High to Low</option>
                                    <option value="newest">Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* Clear */}
                        <div className="md:col-span-1">
                            <button
                                onClick={clearFilters}
                                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm"
                                title="Clear filters"
                            >
                                <X className="h-4 w-4" />
                                Clear
                            </button>
                        </div>
                    </div>

                    {/* Counter row */}
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <Filter className="h-4 w-4 text-gray-400" />
                            <span>{filtered.length} projects found</span>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                {pageItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
                        {pageItems.map((p) => {
                            const st = "In Progress";
                            return (
                                <div
                                    key={p.id}
                                    className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow"
                                >
                                    {/* Image */}
                                    <div className="relative">
                                        <img
                                            src={p.coverImage}
                                            alt={p.name}
                                            className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span
                                                className={`px-3 py-1 text-xs font-semibold rounded-full ${statusChip(
                                                    st
                                                )}`}
                                            >
                                                {st}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-xs">
                                            {p.availableUnits}/{p.totalUnits} Available
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {p.name}
                                        </h3>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center text-gray-600">
                                                <MapPin className="h-4 w-4 mr-2 text-yellow-600" />
                                                <span className="text-sm">
                                                    {p.location}
                                                    {p.city ? ` • ${p.city}` : ""}
                                                </span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Building className="h-4 w-4 mr-2 text-yellow-600" />
                                                <span className="text-sm">
                                                    {(p.unitTypes || []).join(", ")}
                                                </span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Calendar className="h-4 w-4 mr-2 text-yellow-600" />
                                                <span className="text-sm">
                                                    {p.completionDate || "—"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="text-xl font-extrabold text-gray-900 mb-4">
                                            {typeof p.priceRange?.min === "number" &&
                                                typeof p.priceRange?.max === "number"
                                                ? `$${p.priceRange.min.toLocaleString()} - $${p.priceRange.max.toLocaleString()}`
                                                : "Contact for pricing"}
                                        </div>

                                         {typeof onViewProject === "function" ? (
                                            <button
                                                onClick={() => onViewProject(p.id)}
                                                className={`w-full ${BRAND_GRAD} text-white px-4 py-2.5 rounded-lg font-semibold hover:opacity-95 transition-colors duration-200 flex items-center justify-center gap-2`}
                                            >
                                                <Eye className="h-4 w-4" />
                                                View Details
                                            </button>
                                        ) : (
                                            <RouterLink
                                                to={`/akdam-construct/project/${p.id}`}
                                                className={`w-full ${BRAND_GRAD} text-white px-4 py-2.5 rounded-lg font-semibold hover:opacity-95 transition-colors duration-200 flex items-center justify-center gap-2 block text-center`}
                                            >
                                                <Eye className="h-4 w-4 inline-block" />
                                                View Details
                                            </RouterLink>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // Empty state
                    <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
                        <div className="mx-auto w-12 h-12 rounded-xl bg-amber-100 text-amber-800 grid place-items-center mb-4">
                            <Layers className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                            No ongoing projects match your filters
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Try adjusting the search or city filter.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                            <X className="h-4 w-4" />
                            Reset filters
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3.5 py-2 text-sm font-medium rounded-lg border ${currentPage === page
                                        ? `text-white ${BRAND_GRAD} border-transparent`
                                        : "text-gray-700 bg-white border-gray-300 hover:bg-gray-50"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() =>
                                setCurrentPage((p) => Math.min(p + 1, totalPages))
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
