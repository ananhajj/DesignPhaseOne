// src/components/public_akdam/OutdoorInteriorGallery.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon, Video, Images } from "lucide-react";
import Container from "../ui/Container";

export default function OutdoorInteriorGallery({
    eyebrow = "VISUALS",
    title = "OUTDOOR & INTERIOR",
    outdoor = [],
    interior = [],
}) {
    const initialTab = outdoor.length ? "outdoor" : "interior";
    const [tab, setTab] = useState(initialTab);
    const scrollerRef = useRef(null);
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const scrollStartXRef = useRef(0);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const data = useMemo(() => (tab === "outdoor" ? outdoor : interior), [tab, outdoor, interior]);

    // تحديث مؤشرات الأسهم والتقدّم
    const updateArrows = () => {
        const el = scrollerRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        setCanLeft(el.scrollLeft > 8);
        setCanRight(el.scrollLeft < max - 8);
        setScrollProgress(max > 0 ? Math.min(1, el.scrollLeft / max) : 0);
    };

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        updateArrows();
        const onScroll = () => updateArrows();
        const onResize = () => updateArrows();
        el.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        return () => {
            el.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, [tab, data.length]);

    // سكرول بمقدار
    const scrollByAmount = (dir = 1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const amt = Math.round(el.clientWidth * 0.8) * dir;
        el.scrollBy({ left: amt, behavior: "smooth" });
    };

    // تحويل سكرول عمودي لأفقي
    const onWheel = (e) => {
        if (!scrollerRef.current) return;
        // لا تمنع سكرول إذا كان داخل عنصر قابل للتفاعل (مثل فيديو)
        if (e.target?.closest("video")) return;
        e.preventDefault();
        scrollerRef.current.scrollLeft += e.deltaY;
    };

    // سحب بالماوس/التاتش
    const onPointerDown = (e) => {
        const el = scrollerRef.current;
        if (!el) return;
        isDraggingRef.current = true;
        dragStartXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        scrollStartXRef.current = el.scrollLeft;
        el.setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e) => {
        if (!isDraggingRef.current) return;
        const el = scrollerRef.current;
        if (!el) return;
        const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
        const delta = dragStartXRef.current - x;
        el.scrollLeft = scrollStartXRef.current + delta;
    };
    const endDrag = (e) => {
        isDraggingRef.current = false;
        try {
            scrollerRef.current?.releasePointerCapture?.(e.pointerId);
        } catch { }
    };

    // عند تغيير التبويب ارجع لأول عنصر
    useEffect(() => {
        const el = scrollerRef.current;
        if (el) {
            el.scrollTo({ left: 0 });
            updateArrows();
        }
    }, [tab]);

    return (
        <section id="gallery" className="py-20 bg-gradient-to-br from-amber-50 via-white to-white">
            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <div className="text-xs font-semibold tracking-widest text-[#7c533a] uppercase">
                            {eyebrow}
                        </div>
                        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
                        <p className="mt-2 text-gray-600">
                            Browse outdoor and interior visuals. Drag, scroll, or use the arrows.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setTab("outdoor")}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${tab === "outdoor" ? "bg-[#7c533a] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                        >
                            <ImageIcon className="h-4 w-4" />
                            OUTDOOR {outdoor?.length ? `(${outdoor.length})` : ""}
                        </button>
                        <button
                            onClick={() => setTab("interior")}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${tab === "interior" ? "bg-[#7c533a] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                        >
                            <Video className="h-4 w-4" />
                            INTERIOR {interior?.length ? `(${interior.length})` : ""}
                        </button>
                    </div>
                </div>

                {/* Scroller */}
                <div className="relative mt-8">
                    {/* Arrows (تظهر فقط عند الحاجة) */}
                    {canLeft && (
                        <button
                            aria-label="Scroll left"
                            onClick={() => scrollByAmount(-1)}
                            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/40 text-white transition"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                    )}
                    {canRight && (
                        <button
                            aria-label="Scroll right"
                            onClick={() => scrollByAmount(1)}
                            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/40 text-white transition"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    )}

                    {/* Edge gradients */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />

                    <div
                        ref={scrollerRef}
                        onWheel={onWheel}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 select-none
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {data.length === 0 && (
                            <div className="w-full text-gray-500 py-16 text-center">
                                No visuals added yet.
                            </div>
                        )}

                        {data.map((item, idx) => (
                            <figure
                                key={idx}
                                className={`snap-start shrink-0 w-[80vw] md:w-[56vw] lg:w-[40rem] aspect-video rounded-2xl overflow-hidden border border-gray-200 bg-black/5`}
                            >
                                {item.type === "video" ? (
                                    <video
                                        className="w-full h-full object-cover"
                                        src={item.src}
                                        poster={item.poster}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        controls={false}
                                    />
                                ) : (
                                    <img
                                        className="w-full h-full object-cover"
                                        src={item.src}
                                        alt={item.alt || "visual"}
                                        loading="lazy"
                                    />
                                )}
                                {item.caption && (
                                    <figcaption className="px-3 py-2 text-xs text-gray-600 bg-white/80">
                                        {item.caption}
                                    </figcaption>
                                )}
                            </figure>
                        ))}
                    </div>

                    {/* Progress bar + counter */}
                    <div className="mt-4 flex items-center gap-3">
                        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#7c533a] to-[#eab308] transition-all"
                                style={{ width: `${scrollProgress * 100}%` }}
                            />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Images className="w-4 h-4 text-[#7c533a]" />
                            <span>{data.length}</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
