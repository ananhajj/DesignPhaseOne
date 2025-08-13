import { Link } from "react-router-dom";
import {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Twitter,
    Phone,
    Mail,
} from "lucide-react";

export default function Footer({
    logoSrc,
    brandName = "AKDAM",
    phone = "+90 444 9 633",
    email = "info@akdam.com.tr",
}) {
    const year = new Date().getFullYear();

    const quickLinks = [
        { label: "Our Values", to: "/about" },
        { label: "Projects", to: "/projects" },
    ];

    const social = [
        { Icon: Twitter, href: "https://twitter.com/akdam", label: "X" },
        { Icon: Facebook, href: "https://facebook.com/akdam", label: "Facebook" },
        { Icon: Youtube, href: "https://youtube.com/akdam", label: "YouTube" },
        { Icon: Linkedin, href: "https://linkedin.com/company/akdam", label: "LinkedIn" },
        { Icon: Instagram, href: "https://instagram.com/akdam", label: "Instagram" },
    ];

    return (
        <footer className="border-t border-black/10 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
            <div className="max-w-6xl mx-auto px-4 py-10">

                {/* Brand */}
                <div className="flex items-center justify-center mb-6">
                    {logoSrc ? (
                        <img
                            src={logoSrc}
                            alt={brandName}
                            className="w-40 h-25 w-auto object-contain"
                        />
                    ) : (
                        <span className="text-sm tracking-widest text-gray-200">
                            {brandName}
                        </span>
                    )}
                </div>

                {/* Social */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    {social.map(({ Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/30 transition"
                        >
                            <Icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>

                {/* Simple rows */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm">
                    {/* Quick Links */}
                    <div className="flex items-center justify-center gap-10">
                        {quickLinks.map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                className="text-gray-200 hover:text-[#eab308] transition"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Phone */}
                    <div>
                        <div className="text-gray-400 mb-1">Telephone number</div>
                        <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="inline-flex items-center gap-2 text-gray-200 hover:text-[#eab308] transition"
                        >
                            <Phone className="w-4 h-4" />
                            {phone}
                        </a>
                    </div>

                    {/* Email */}
                    <div>
                        <div className="text-gray-400 mb-1">emails</div>
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 text-gray-200 hover:text-[#eab308] transition"
                        >
                            <Mail className="w-4 h-4" />
                            {email}
                        </a>
                    </div>
                </div>

                {/* Bottom line */}
                <div className="mt-10 pt-6 border-t border-white/10 text-xs text-center text-gray-400">
                    © {year} {brandName}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
 
