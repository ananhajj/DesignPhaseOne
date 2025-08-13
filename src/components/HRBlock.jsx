import { ArrowRight, Award, CheckCircle } from "lucide-react";
import Container from "./ui/Container";
import { Link } from "react-router-dom";

/** Reusable block that supports text + visuals (image/video) */
export default function HRBlock({ id, eyebrow, title, lead, bullets = [], cta, visuals = [], reverse = false, softBg = false }) {
    const BRAND_GRAD = "from-[#7c533a] to-yellow-500";

    return (
        <section
            id={id}
            className={`py-16 lg:py-24 relative overflow-hidden ${softBg ? "bg-gradient-to-br from-amber-50 to-yellow-100" : "bg-gradient-to-br from-gray-50 to-white"
                }`}
        >
            {/* subtle brand accents */}
            <div className="pointer-events-none absolute inset-0 opacity-20">
                <div className="absolute -top-10 -left-10 w-80 h-80 rounded-full blur-3xl bg-[#7c533a]/15" />
                <div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full blur-3xl bg-yellow-500/20" />
            </div>

            <Container className="relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
                    {/* Text */}
                    <div className="lg:col-span-5">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide
                              text-white bg-gradient-to-r ${BRAND_GRAD} shadow-sm ring-1 ring-white/10`}>
                            <Award className="w-4 h-4 mr-2" />
                            {eyebrow}
                        </span>

                        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {title.split(" ").slice(0, -2).join(" ")}{" "}
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${BRAND_GRAD}`}>
                                {title.split(" ").slice(-2).join(" ")}
                            </span>
                        </h2>

                        <p className="mt-4 text-lg text-gray-600">{lead}</p>

                        {bullets.length > 0 && (
                            <ul className="mt-6 space-y-3">
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 mt-0.5 text-[#7c533a]" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {cta && (
                            <Link
                                to={cta.to}
                                className={`mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white
                           bg-gradient-to-r ${BRAND_GRAD} hover:from-[#6e4a31] hover:to-yellow-400 transition shadow-sm`}
                            >
                                {cta.label}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>

                    {/* Visuals */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 gap-4">
                            {visuals.map((v, idx) =>
                                v.type === "video" ? (
                                    <div key={idx} className="col-span-2 lg:col-span-1 rounded-2xl overflow-hidden border-2 border-gray-100 bg-gray-100">
                                        <video
                                            src={v.src}
                                            poster={v.poster}
                                            className="w-full h-full object-cover"
                                            muted
                                            loop
                                            playsInline
                                            autoPlay
                                        />
                                    </div>
                                ) : (
                                    <div key={idx} className="rounded-2xl overflow-hidden border-2 border-gray-100 bg-gray-100">
                                        <img src={v.src} alt={v.alt || "HR visual"} className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}