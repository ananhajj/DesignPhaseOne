// src/layouts/PublicLayout.jsx
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navigation from "../components/public/Navigation.jsx";
import Footer from "../components/public/Footer.jsx";
import SideButtons from "../components/public/SideButtons.jsx";
import FloatingContactButton from "../components/public/FloatingContactButton.jsx";
import ScrollToTop from "../components/public/ScrollToTop.jsx";

export default function PublicLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const mainClass = isHome ? "" : "pt-20 mb-10";

    return (
        <div id="app-root" className="min-h-screen bg-white">
            <ScrollToTop/>
            <Navigation />
            <SideButtons />
            <main className={mainClass}>
                <Outlet />
            </main>
            <Footer logoSrc={"https://res.cloudinary.com/dgbdudxqm/image/upload/v1755091006/293131615_374295688140657_7547166289829242640_n-removebg-preview_ax1e2c.png"} />
            <FloatingContactButton onClick={() => navigate("/contact")} />
        </div>
    );
}
