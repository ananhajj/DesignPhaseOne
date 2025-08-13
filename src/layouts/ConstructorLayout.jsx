// src/layouts/ConstructorLayout.jsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ScrollToTopButton from "../components/public/FloatingContactButton";
import Footer from "../components/public/Footer";
import Navigation from "../components/public/Navigation";
import SideButtons from "../components/public/SideButtons";
import ScrollToTop from "../components/public/ScrollToTop";

export default function ConstructorLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const mainClass = isHome ? "" : "";
    return (
        <div id="app-root" className="min-h-screen bg-white">
             <ScrollToTop/>
            <Navigation />
            <SideButtons />
            <main >
                <Outlet />
            </main>
            <Footer logoSrc={"https://res.cloudinary.com/dgbdudxqm/image/upload/v1755091006/293131615_374295688140657_7547166289829242640_n-removebg-preview_ax1e2c.png"} />
            <ScrollToTopButton onClick={() => navigate("/contact")} />
        </div>
    );
}
