import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

// مرّر مصفوفة المدن من أبوك أو استوردها هنا
export default function CitySelect({ value, onChange, options, required, name = "city", placeholder = "Select a city" }) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const ref = useRef(null);

    const list = useMemo(() => {
        const q = query.trim().toLowerCase();
        return q ? options.filter(c => c.toLowerCase().includes(q)) : options;
    }, [options, query]);

    useEffect(() => {
        const onClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    useEffect(() => setActive(0), [query, open]);

    const handleKey = (e) => {
        if (!open && (e.key === "ArrowDown" || e.key === "Enter")) { setOpen(true); return; }
        if (e.key === "ArrowDown") { e.preventDefault(); setActive(i => Math.min(i + 1, list.length - 1)); }
        if (e.key === "ArrowUp") { e.preventDefault(); setActive(i => Math.max(i - 1, 0)); }
        if (e.key === "Enter") {
            e.preventDefault();
            const chosen = list[active];
            if (chosen) { onChange(chosen); setOpen(false); setQuery(""); }
        }
        if (e.key === "Escape") setOpen(false);
    };

    const displayValue = open || query ? query : (value || "");

    return (
        <div className="relative" ref={ref}>
            {/* hidden input ليدعم required بالمتصفح */}
            <input type="text" className="hidden" tabIndex={-1} readOnly name={name} value={value} required={required} />

            <div className="flex">
                <input
                    type="text"
                    role="combobox"
                    aria-expanded={open}
                    aria-controls="city-listbox"
                    onFocus={() => setOpen(true)}
                    onKeyDown={handleKey}
                    value={displayValue}
                    onChange={(e) => { setQuery(e.target.value); if (!open) setOpen(true); }}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7c533a] focus:border-transparent"
                />
                <button
                    type="button"
                    aria-label="Toggle city list"
                    onClick={() => setOpen(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>
            </div>

            {open && (
                <ul
                    id="city-listbox"
                    role="listbox"
                    className="absolute top-full left-0 right-0 z-[9999] mt-1 max-h-60 overflow-auto rounded-lg border bg-white shadow-lg"
                >
                    {list.length === 0 ? (
                        <li className="px-3 py-2 text-sm text-gray-500">No results</li>
                    ) : (
                        list.map((city, idx) => (
                            <li
                                key={city}
                                role="option"
                                aria-selected={value === city}
                                className={`px-3 py-2 cursor-pointer text-sm ${idx === active ? "bg-[#7c533a]/10 text-[#7c533a]" : "hover:bg-gray-50"
                                    }`}
                                onMouseEnter={() => setActive(idx)}
                                onMouseDown={(e) => e.preventDefault()} // ما يسكّر الفوكس قبل الكلك
                                onClick={() => { onChange(city); setOpen(false); setQuery(""); }}
                            >
                                {city}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
}
