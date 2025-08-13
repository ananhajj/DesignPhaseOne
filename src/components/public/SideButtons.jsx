import { Phone, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SideButtons() {
    const navigate = useNavigate();
    return (
        <div className="fixed top-1/3 right-0 z-50 flex flex-col gap-3 select-none">
            {/* Let's Call You */}
            <button
                type="button"
                onClick={() => {
                    const section = document.getElementById("lets-call-you");
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                aria-label="Call us"
                className="flex items-center justify-center bg-[#7c533a] hover:bg-[#6e4a31] text-white transition-all duration-200 z-50 hover:scale-110 transform group px-3 py-8 rounded-l-xl shadow-lg border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#c49a6c] whitespace-nowrap leading-none"
                style={{ writingMode: "vertical-rl" }}
            >
                <Phone className="mb-2 rotate-90" size={18} />
                <span className="font-semibold">Let&apos;s Call You</span>
            </button>


            {/* Nef Online */}
            <Link
                to="/online"
                aria-label="Open online chat"
                className="flex items-center justify-center bg-yellow-500  transition-all duration-200 z-50 hover:scale-110 transform group text-white px-3 py-8 rounded-l-xl shadow-lg border border-black/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d3b18a] whitespace-nowrap leading-none"
                style={{ writingMode: "vertical-rl" }}
            >
                <MessageCircle className="mb-2 rotate-90" size={18} />
                <span className="font-semibold">Akdam Online</span>
            </Link>
        </div>
    );
}
