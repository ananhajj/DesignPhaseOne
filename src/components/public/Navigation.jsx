import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// بيانات القوائم
const aboutDropdown = [
    { label: "About Us", to: "/about", description: "" },
    { label: "Founder’s Message", to: "/about", description: "" },
    { label: "Our Values", to: "/about", description: "" },
    { label: "Akdam Construct", to: "/akdam-construct", description: "" },
    { label: "Akdam Home", to: "/", description: "" },
    { label: "Akdam Furniture", to: "/about", description: "" },
    { label: "Akdam Investment", to: "/about", description: "" },
    { label: "Akdam Cars", to: "/about", description: "" },
];

const projectsDropdown = [
    { label: "On-going Projects", to: "/akdam-construct/projects/on-going", description: "Explore our current active projects" },
    { label: "Completed Projects", to: "/akdam-construct/projects/on-going", description: "View our successfully delivered projects" },
];

// ألوان العلامة
const ACTIVE_TAB = "text-[#7c533a] bg-[#7c533a]/10";
const ACTIVE_TEXT = "text-[#7c533a]";
const HOVER_BRAND = "group-hover:text-[#7c533a]";
const ACCENT_LINK = "text-yellow-500";

export default function Navigation() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // "about" | "projects" | "language" | null
    const [language, setLanguage] = useState("EN");
    const location = useLocation();
    const timeoutRef = useRef(null);

    const isActive = (path) => location.pathname.startsWith(path);

    const handleMouseEnter = (dropdown) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
    };

    const closeMobileMenu = () => setIsMobileOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileOpen]);

    return (
        <>
            <nav
                className="
    relative z-[100] bg-white border-b overflow-visible
    [&_a:focus]:outline-none [&_a:focus-visible]:outline-none [&_a:focus]:ring-0 [&_a:focus-visible]:ring-0
    [&_button:focus]:outline-none [&_button:focus-visible]:outline-none [&_button:focus]:ring-0 [&_button:focus-visible]:ring-0
  "
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
                    <div className="flex items-center justify-between h-20 overflow-visible">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center group">
                                <img
                                    src="https://res.cloudinary.com/dgbdudxqm/image/upload/v1755091006/293131615_374295688140657_7547166289829242640_n-removebg-preview_ax1e2c.png"
                                    alt="Akdam Logo"
                                    className="w-20 h-20 object-contain group-hover:scale-105 transition-transform duration-200"
                                />
                            </Link>
                        </div>



                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {/* About Us */}
                            <div
                                className="relative overflow-visible"
                                onMouseEnter={() => handleMouseEnter("about")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive("/about") ? ACTIVE_TAB : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    About Us
                                    <ChevronDown
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {activeDropdown === "about" && (
                                    <div className="absolute top-full left-0 mt-2 z-[9999] w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {aboutDropdown.map((item) => (
                                            <Link
                                                key={item.to}
                                                to={item.to}
                                                className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-150 group"
                                            >
                                                <div className={`text-sm font-medium text-gray-900 ${HOVER_BRAND}`}>
                                                    {item.label}
                                                </div>
                                                {item.description && (
                                                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                                                )}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                         

                            {/* Projects */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter("projects")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive("/projects") ? ACTIVE_TAB : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    Projects
                                    <ChevronDown
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "projects" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {activeDropdown === "projects" && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-xl shadow-lg border border-gray-200 p-4 z-[10001]">
                                        <div className="grid grid-cols-2 gap-4">
                                            {/* يسار */}
                                            <ul className="text-sm">
                                                <div className="h-px bg-gray-100 mb-2" />
                                                {projectsDropdown.map((i, idx) => (
                                                    <li key={i.to} className="py-1">
                                                        {idx !== 0 && <div className="h-px bg-gray-100 my-2" />}
                                                        <Link to={i.to} className="block px-2 py-2 rounded hover:bg-gray-50">
                                                            {i.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <div className="pt-3">
                                                    <Link to="/akdam-construct/projects" className={`${ACCENT_LINK} hover:underline text-sm font-semibold`}>
                                                        See All →
                                                    </Link>
                                                </div>
                                            </ul>

                                            {/* يمين: صورة */}
                                            <div className="rounded border bg-gray-50 aspect-[4/3] flex items-center justify-center">
                                                <img
                                                    src="/menu-preview.png"
                                                    alt="Preview"
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>


                            {/* HR */}
                            <Link
                                to="/hr"
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive("/hr") ? ACTIVE_TAB : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    }`}
                            >
                                Human Resources
                            </Link>
                        </div>

                        {/* Right Side */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button
                                aria-label="Search"
                                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                            >
                                <Search className="h-5 w-5" />
                            </button>

                            <a
                                href="tel:+904449633"
                                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
                            >
                                <Phone className="h-4 w-4" />
                                <span>444 9 633</span>
                            </a>

                            {/* Language */}
                            <div
                                className="relative"
                                onMouseEnter={() => handleMouseEnter("language")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200">
                                    {language}
                                    <ChevronDown
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === "language" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {activeDropdown === "language" && (
                                    <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <button
                                            onClick={() => setLanguage("EN")}
                                            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${language === "EN" ? `${ACTIVE_TEXT} font-medium` : "text-gray-700"
                                                }`}
                                        >
                                            EN
                                        </button>
                                        <button
                                            onClick={() => setLanguage("TR")}
                                            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${language === "TR" ? `${ACTIVE_TEXT} font-medium` : "text-gray-700"
                                                }`}
                                        >
                                            TR
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileOpen(!isMobileOpen)}
                                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
                                aria-label="Toggle menu"
                            >
                                {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={closeMobileMenu} />
                    <div className="fixed top-20 left-0 right-0 bottom-0 bg-white animate-in slide-in-from-top duration-300">
                        <div className="flex flex-col h-full">
                            {/* Top bar */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                                <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200">
                                    <Search className="h-5 w-5" />
                                </button>
                                <a
                                    href="tel:+904449633"
                                    className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>444 9 633</span>
                                </a>
                                <button
                                    onClick={() => setLanguage(language === "EN" ? "TR" : "EN")}
                                    className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-300"
                                >
                                    {language}
                                </button>
                            </div>

                            {/* Links */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                <details className="group">
                                    <summary className="flex items-center justify-between p-3 rounded-lg cursor-pointer font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200">
                                        <span>About Us</span>
                                        <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform duration-200" />
                                    </summary>
                                    <div className="mt-2 ml-4 space-y-1">
                                        {aboutDropdown.map((item) => (
                                            <Link
                                                key={item.to}
                                                to={item.to}
                                                onClick={closeMobileMenu}
                                                className="block p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </details>

                            

                                <details className="group">
                                    <summary className="flex items-center justify-between p-3 rounded-lg cursor-pointer font-medium text-gray-900 hover:bg-gray-50 transition-colors duration-200">
                                        <span>Projects</span>
                                        <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform duration-200" />
                                    </summary>
                                    <div className="mt-2 ml-4 space-y-1">
                                        {projectsDropdown.map((item) => (
                                            <Link
                                                key={item.to}
                                                to={item.to}
                                                onClick={closeMobileMenu}
                                                className="block p-3 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                        <Link
                                            to="/akdam-construct/projects"
                                            onClick={closeMobileMenu}
                                            className="block p-3 rounded-lg text-yellow-500 transition-colors duration-200"
                                        >
                                            View All Projects →
                                        </Link>
                                    </div>
                                </details>

                          

                                <Link
                                    to="/hr"
                                    onClick={closeMobileMenu}
                                    className={`block p-3 rounded-lg font-medium transition-colors duration-200 ${isActive("/hr") ? ACTIVE_TAB : "text-gray-900 hover:bg-gray-50"
                                        }`}
                                >
                                    Human Resources
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
