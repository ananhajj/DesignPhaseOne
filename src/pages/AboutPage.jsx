import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    Info,
    Users,
    Quote,
    HeartHandshake,
    Building2,
    Home,
    Sofa,
    Car,
    LineChart,
    Sparkles,
    Layers,
    ExternalLink,
    X,
    Menu,

} from "lucide-react";
import { Link } from "react-router-dom";

// ---------- Brand tokens ----------
const brand = {
    from: "#7c533a",
    to: "#eab308",
    grad: "bg-gradient-to-r from-[#7c533a] to-[#eab308]",
    text: "text-[#7c533a]",
};

// ---------- Configurable data ----------
const ABOUT_SECTIONS = [
    { id: "about-akdam", title: "About Akdam Group", subtitle: "Who we are & what we stand for", icon: Info, link: null },
    { id: "founder-message", title: "Founder’s Message", subtitle: "Vision, principles, and long-term outlook", icon: Quote, link: null },
    { id: "our-values", title: "Our Values", subtitle: "Integrity • Excellence • Responsibility", icon: HeartHandshake, link: null },
    { id: "akdam-construct", title: "Akdam Construct", subtitle: "Engineering tomorrow’s landmarks", icon: Building2, link: "/akdam-construct" },
    { id: "akdam-home", title: "Akdam Home", subtitle: "Residential experiences designed for life", icon: Home, link: null },
    { id: "akdam-furniture", title: "Akdam Furniture", subtitle: "Crafted comfort & timeless design", icon: Sofa, link: null },
    { id: "akdam-investment", title: "Akdam Investment", subtitle: "Sustainable growth & value creation", icon: LineChart, link: null },
    { id: "akdam-cars", title: "Akdam Cars", subtitle: "Performance, reliability, and service", icon: Car, link: null },
    { id: "future-space-1", title: "Future Uses", subtitle: "Reserved for upcoming initiatives", icon: Sparkles, link: null },
    { id: "future-space-2", title: "Future Uses", subtitle: "Reserved for upcoming initiatives", icon: Layers, link: null },
];

// ---------- Small UI Atoms (light theme) ----------
const LightBadge = ({ children }) => (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1.5 border border-amber-200/80 bg-amber-50 text-amber-700">
        <Users className="w-3.5 h-3.5" />
        {children}
    </span>
);

const PrimaryBtn = ({ children, className = "", ...props }) => (
    <button
        {...props}
        className={`${brand.grad} text-white px-4 py-2 text-sm rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg hover:opacity-95 active:scale-[.99] ${className}`}
    >
        {children}
    </button>
);

const GhostBtn = ({ children, className = "", ...props }) => (
    <button
        {...props}
        className={`px-3 py-2 text-sm rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 border border-gray-200 text-gray-700 hover:bg-gray-50 ${className}`}
    >
        {children}
    </button>
);

const SoftCard = ({ children, className = "" }) => (
    <div className={`relative group rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
        <div className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#7c533a]/8 to-yellow-500/8 blur-xl" />
        <div className="relative z-10">{children}</div>
    </div>
);

// ---------- Precise Media Card (image + text) ----------
/**
 * Props:
 *  - image: src url
 *  - title: heading
 *  - description: small text
 *  - imageSide: 'left' | 'right' (lg+)
 */
function MediaCard({ image, title, description, imageSide = "left" }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
            <div className={`flex flex-col ${imageSide === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                {/* Image wrapper with fixed aspect & full-height on large */}
                <div className="lg:basis-[50%] lg:min-h-[220px]">
                    <div className="relative w-full aspect-[16/10] lg:h-full">
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
                {/* Text */}
                <div className="lg:basis-[50%] p-5 lg:p-6 flex items-center">
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1.5">{title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ---------- Drawer (mobile / when any About button clicked) ----------
function AboutDrawer({ open, onClose, sections, onGoto }) {
    return (
        <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
            <div className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={onClose} />
            <div className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white border-l border-gray-200 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`} role="dialog" aria-modal="true">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gradient-to-r from-amber-50 to-yellow-50">
                    <div className="flex items-center gap-2 text-gray-800">
                        <Menu className="w-4 h-4" />
                        <span className="text-sm font-semibold">About Menu</span>
                    </div>
                    <GhostBtn onClick={onClose}><X className="w-4 h-4" />Close</GhostBtn>
                </div>
                <div className="p-5 space-y-3">
                    {sections.map(({ id, title, subtitle, icon: Icon, link }) => (
                        <button key={id} onClick={() => { onGoto(id); onClose(); }} className="w-full text-left rounded-xl p-4 border border-gray-200 bg-white hover:bg-amber-50/60 transition flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg ${brand.grad} grid place-items-center flex-shrink-0`}><Icon className="w-5 h-5 text-white" /></div>
                            <div className="min-w-0">
                                <div className="text-gray-900 font-semibold truncate">{title}</div>
                                <div className="text-xs text-gray-500 truncate">{subtitle}</div>
                            </div>
                            {link && (
                                <a href={link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="ml-auto text-amber-600 hover:text-amber-500" title="Open external site">
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ---------- Section block (light) ----------
function AboutSectionBlock({ id, title, subtitle, icon: Icon, link }) {
    return (
        <section id={id} className="scroll-mt-28 py-12 lg:py-16 border-b border-gray-200">
            <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${brand.grad} grid place-items-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">{title}</h3>
                    <p className="text-sm text-gray-600">{subtitle}</p>
                </div>
                {link && (
                    <a href={link} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-2 text-amber-700 hover:text-amber-600">Visit <ExternalLink className="w-4 h-4" /></a>
                )}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Prose card */}
                <SoftCard>
                    <div className="prose max-w-none">
                        <h4 className={`${brand.text}`}>Overview</h4>
                        <p className="text-gray-700">This space is compatible with both rich text and visuals. Add your story, milestones, and any narrative that explains the section’s purpose. You can embed images, charts, timelines, or even short videos.</p>
                        <ul>
                            <li>Key point one with a short description.</li>
                            <li>Key point two focused on impact and outcomes.</li>
                            <li>Key point three that highlights differentiation.</li>
                        </ul>
                    </div>
                </SoftCard>

                {/* Media cards with precise layout */}
                <div className="grid gap-6">
                    <MediaCard
                        image="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1200&auto=format&fit=crop"
                        title="Human-centered design"
                        description="We combine technical excellence with a deep respect for how people live and work inside our spaces."
                        imageSide="left"
                    />
                    <MediaCard
                        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                        title="Sustainable impact"
                        description="From materials to operations, we optimize for longevity, efficiency, and community value."
                        imageSide="right"
                    />
                </div>
            </div>
        </section>
    );
}

// ---------- Main About Page (light design) ----------
export default function AboutPage() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeId, setActiveId] = useState(ABOUT_SECTIONS[0].id);
    const containerRef = useRef(null);

    const goto = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        window.history.replaceState(null, "", `#${id}`);
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    useEffect(() => {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); });
        }, { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });
        ABOUT_SECTIONS.forEach(({ id }) => { const node = document.getElementById(id); if (node) io.observe(node); });
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        const hash = window.location.hash?.replace("#", "");
        if (hash) setTimeout(() => goto(hash), 100);
    }, []);

    const menuItems = useMemo(() => ABOUT_SECTIONS, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-white">
            <header className="relative overflow-hidden py-14 border-b border-gray-200">
                <div
                    className="absolute inset-0 pointer-events-none opacity-60"
                    style={{ backgroundImage: "radial-gradient(60rem 60rem at 10% 10%, rgba(234,179,8,.12), transparent 60%), radial-gradient(50rem 50rem at 90% 10%, rgba(124,83,58,.10), transparent 60%)" }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <div>
                            <LightBadge>About Us</LightBadge>
                            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">Discover Akdam Group</h1>
                            <p className="mt-2 text-gray-600 max-w-2xl">Learn about our journey, values, and business lines — all on one page.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <PrimaryBtn onClick={() => setDrawerOpen(true)}><Menu className="w-4 h-4" />About Menu</PrimaryBtn>
                            <GhostBtn onClick={() => setDrawerOpen(true)}>Explore Sections</GhostBtn>
                        </div>
                    </div>
                </div>
            </header>

            <main ref={containerRef} className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                    <div className="grid lg:grid-cols-[250px,1fr] gap-8">
                        <aside className="hidden lg:block sticky top-24 self-start">
                            <nav className="space-y-2">
                                {menuItems.map(({ id, title, icon: Icon, link }) => (
                                    <button key={id} onClick={() => goto(id)} className={`w-full text-left rounded-xl px-3 py-2.5 flex items-center gap-3 border transition ${activeId === id ? `border-amber-300 bg-amber-100` : `border-gray-200 bg-white hover:bg-amber-50`}`} title={title}>
                                        <div className={`w-8 h-8 rounded-md ${brand.grad} grid place-items-center`}><Icon className="w-4.5 h-4.5 text-white" /></div>
                                        <span className="text-sm text-gray-800 font-medium line-clamp-1">{title}</span>
                                        {link && (
                                            link.startsWith("http")
                                                ? (
                                                  
                                                    <a
                                                        href={link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        onClick={(e) => e.stopPropagation()} 
                                                        className="ml-auto text-amber-700 hover:text-amber-600"
                                                        title="Open external site"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )
                                                : (
                                                 
                                                    <Link
                                                        to={link}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="ml-auto text-amber-700 hover:text-amber-600"
                                                        title="Open internal page"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </Link>
                                                )
                                        )}

                                    </button>
                                ))}
                            </nav>
                        </aside>

                        <div>
                            {ABOUT_SECTIONS.map((sec) => (
                                <AboutSectionBlock key={sec.id} {...sec} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <AboutDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} sections={menuItems} onGoto={goto} />
        </div>
    );
}
