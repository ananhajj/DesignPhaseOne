import React, { useState } from "react";
import { Phone, Mail, User, Send, MapPin, CheckCircle, Clock } from "lucide-react";
import Container from "../ui/Container";

const TURKEY_CITIES = [
    "Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Adana", "Konya", "Gaziantep",
    "Kayseri", "Mersin", "Samsun", "Trabzon", "Sakarya (Sapanca)", "Kocaeli", "Eskisehir",
    "Diyarbakir", "Manisa", "Balikesir", "Denizli", "Malatya", "Erzurum", "Van"
];

export default function LetsCallYouSection({
    eyebrow = "GET IN TOUCH",
    title = "Your dream home in nature awaits you",
    paragraphs = [
        "Experience the tranquility of Sapanca's natural beauty combined with modern luxury at Akdam. Just one hour from Istanbul, immerse yourself in a peaceful environment surrounded by majestic trees and the soothing sounds of flowing streams.",
        "Take advantage of our exclusive pre-launch offers featuring 99 modern villas, 78 thoughtfully designed residences, and a luxury hotel operated by a renowned hospitality brand.",
        "Join a community that values privacy, nature, and sophisticated living. Fill out the form below, and our expert sales team will contact you to schedule your personal consultation and site visit.",
    ],
    onSubmit,
    variant = "light", // "light" | "dark"
}) {
    const [formData, setFormData] = useState({
        phone: "",
        name: "",
        surname: "",
        email: "",
        city: "",
        consent: false,
        newsletter: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // ===== Theming per variant =====
    const isDark = variant === "dark";

    const sectionBg = isDark
        ? "bg-gradient-to-br from-slate-900 via-gray-900 to-black"
        : "bg-gradient-to-br from-yellow-50 to-amber-50";

    const titleColor = isDark ? "text-white" : "text-gray-900";
    const paragraphColor = isDark ? "text-gray-300" : "text-gray-700";

    const badgeWrap =
        isDark
            ? "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20"
            : "bg-yellow-100 text-yellow-800 border border-yellow-200";

    const cardWrap =
        isDark
            ? "bg-white/10 backdrop-blur-xl border border-white/20"
            : "bg-white border border-gray-200 shadow-lg";

    const labelColor = isDark ? "text-gray-200" : "text-gray-700";

    const inputBase =
        "w-full rounded-xl transition-all duration-300 focus:ring-2 focus:ring-yellow-500/30 focus:border-yellow-500";

    const inputBg =
        isDark
            ? "bg-white/10 border border-white/20 text-white placeholder-gray-400"
            : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400";

    const inputWithIconBase =
        isDark
            ? "pl-12 pr-4 py-4"
            : "pl-12 pr-4 py-4";

    const inputPlainBase =
        isDark
            ? "px-4 py-4"
            : "px-4 py-4";

    const selectBase =
        isDark
            ? "pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white"
            : "pl-12 pr-4 py-4 bg-white border border-gray-300 text-gray-900";

    const checkboxClass =
        isDark
            ? "mt-1 w-5 h-5 rounded border-gray-400 bg-white/10 text-yellow-500 focus:ring-yellow-500 focus:ring-2"
            : "mt-1 w-5 h-5 rounded border-gray-300 bg-white text-yellow-600 focus:ring-yellow-500 focus:ring-2";

    const subtleAccentLayer = isDark
        ? (
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c533a]/40 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/40 rounded-full blur-3xl" />
            </div>
        )
        : (
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[22rem] h-[22rem] bg-amber-100 rounded-full blur-3xl" />
            </div>
        );

    // ===== Handlers =====
    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.consent) {
            alert("Please accept the privacy policy to continue.");
            return;
        }
        setIsSubmitting(true);
        try {
            if (onSubmit) {
                await onSubmit(formData);
            } else {
                // Mock submit
                await new Promise((r) => setTimeout(r, 1500));
                console.log("Form submitted:", formData);
            }
            setIsSubmitted(true);
            setTimeout(() => {
                setFormData({
                    phone: "",
                    name: "",
                    surname: "",
                    email: "",
                    city: "",
                    consent: false,
                    newsletter: false,
                });
                setIsSubmitted(false);
            }, 3000);
        } catch (err) {
            console.error("Submission error:", err);
            alert("There was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // ===== Success State =====
    if (isSubmitted) {
        return (
            <section id="lets-call-you" className={`py-20 lg:py-32 ${isDark ? "bg-gradient-to-br from-slate-900 via-gray-900 to-black" : "bg-gradient-to-br from-yellow-50 to-amber-50"}`}>
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#7c533a] to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                            Thank You for Your Interest!
                        </h2>
                        <p className={`text-xl mb-6 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            Your request has been successfully submitted. Our sales team will contact you within 24 hours to schedule your personal consultation.
                        </p>
                        <div className={`inline-flex items-center gap-2 font-semibold ${isDark ? "text-yellow-300" : "text-[#7c533a]"}`}>
                            <Clock className="w-5 h-5" />
                            Expected response time: Within 24 hours
                        </div>
                    </div>
                </Container>
            </section>
        );
    }

    // ===== Default Render =====
    return (
        <section id="lets-call-you" className={`py-20 lg:py-32 relative overflow-hidden ${sectionBg}`}>
            {subtleAccentLayer}

            <Container className="relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
                    {/* Left Content */}
                    <div className="xl:col-span-7">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-8 ${badgeWrap}`}>
                            <Phone className="w-4 h-4" />
                            {eyebrow}
                        </div>

                        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 ${titleColor}`}>
                            {title.split(" ").slice(0, 3).join(" ")}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c533a] to-yellow-500">
                                {title.split(" ").slice(3).join(" ")}
                            </span>
                        </h2>

                        <div className={`space-y-6 text-lg leading-relaxed mb-12 ${paragraphColor}`}>
                            {paragraphs.map((p, i) => (
                                <div key={i} className="relative pl-8">
                                    <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-[#7c533a] to-yellow-500 rounded-full" />
                                    <p>{p}</p>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="text-center p-4">
                                <div className={`text-2xl font-bold mb-1 ${isDark ? "text-yellow-400" : "text-yellow-600"}`}>24/7</div>
                                <div className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>Customer Support</div>
                            </div>
                            <div className="text-center p-4">
                                <div className={`text-2xl font-bold mb-1 ${isDark ? "text-yellow-300" : "text-yellow-600"}`}>15+</div>
                                <div className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>Years Experience</div>
                            </div>
                            <div className="text-center p-4 lg:col-span-1 col-span-2">
                                <div className={`text-2xl font-bold mb-1 ${isDark ? "text-amber-400" : "text-amber-600"}`}>5,000+</div>
                                <div className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}>Happy Families</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="xl:col-span-5">
                        <div className={`${cardWrap} rounded-3xl p-8`}>
                            <div className="text-center mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Schedule Your Visit</h3>
                                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>Fill out the form and we'll contact you within 24 hours</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Phone */}
                                <div>
                                    <label className={`block text-sm font-semibold mb-3 ${labelColor}`}>Phone Number *</label>
                                    <div className="relative">
                                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                            <Phone className="w-4 h-4" />
                                            <span className="text-sm">+90</span>
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="501 234 56 78"
                                            className={`${inputBase} ${inputBg} ${inputWithIconBase}`}
                                        />
                                    </div>
                                </div>

                                {/* Name & Surname */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={`block text-sm font-semibold mb-3 ${labelColor}`}>First Name *</label>
                                        <div className="relative">
                                            <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}`} />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="John"
                                                className={`${inputBase} ${inputBg} ${inputWithIconBase}`}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-semibold mb-3 ${labelColor}`}>Last Name *</label>
                                        <input
                                            type="text"
                                            name="surname"
                                            value={formData.surname}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Doe"
                                            className={`${inputBase} ${inputBg} ${inputPlainBase}`}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className={`block text-sm font-semibold mb-3 ${labelColor}`}>Email Address *</label>
                                    <div className="relative">
                                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}`} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="john.doe@example.com"
                                            className={`${inputBase} ${inputBg} ${inputWithIconBase}`}
                                        />
                                    </div>
                                </div>

                                {/* City */}
                                <div>
                                    <label className={`block text-sm font-semibold mb-3 ${labelColor}`}>City *</label>
                                    <div className="relative">
                                        <MapPin className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}`} />
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                            className={`${selectBase} ${inputBase} appearance-none cursor-pointer`}
                                        >
                                            <option value="" className="text-gray-900">Select your city</option>
                                            {TURKEY_CITIES.map((city) => (
                                                <option key={city} value={city} className="text-gray-900">
                                                    {city}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Checkboxes */}
                                <div className="space-y-4 pt-2">
                                    <label className={`flex items-start gap-4 text-sm cursor-pointer ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            checked={formData.consent}
                                            onChange={handleInputChange}
                                            className={checkboxClass}
                                        />
                                        <span className="leading-relaxed">
                                            I have read and accept the{" "}
                                            <a href="/privacy" className={`${isDark ? "text-yellow-300 hover:text-yellow-200" : "text-[#7c533a] hover:text-yellow-600"} underline`}>
                                                Privacy Policy
                                            </a>{" "}
                                            and consent to the processing of my personal data. *
                                        </span>
                                    </label>

                                    <label className={`flex items-start gap-4 text-sm cursor-pointer ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                        <input
                                            type="checkbox"
                                            name="newsletter"
                                            checked={formData.newsletter}
                                            onChange={handleInputChange}
                                            className={checkboxClass}
                                        />
                                        <span className="leading-relaxed">
                                            I would like to receive updates about new projects and exclusive offers from Akdam.
                                        </span>
                                    </label>
                                </div>

                                {/* Submit */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full group flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300
                    ${isSubmitting ? "from-gray-500 to-gray-600 cursor-not-allowed" : "hover:from-[#6e4a31] hover:to-yellow-400 hover:shadow-2xl hover:scale-105"}
                    bg-gradient-to-r from-[#7c533a] to-yellow-500 text-white`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                Schedule My Visit
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className={`${isDark ? "text-gray-500" : "text-gray-500"} text-xs text-center pt-2`}>
                                    🔒 This form is secured with SSL encryption and protected by reCAPTCHA
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
