// src/layouts/HRLayout.jsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../components/public/Navigation";
import SideButtons from "../components/public/SideButtons";
import Footer from "../components/public/Footer";
import ScrollToTopButton from "../components/public/FloatingContactButton";
import ScrollToTop from "../components/public/ScrollToTop";
export default function HRLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
        <div className="min-h-screen bg-gray-50">
                <ScrollToTop/>
            {/* HR Header / Tabs */}
            <Navigation />
          
            <main className="pt-16">
                <Outlet />
            </main>
            <Footer logoSrc={"https://res.cloudinary.com/dgbdudxqm/image/upload/v1755091006/293131615_374295688140657_7547166289829242640_n-removebg-preview_ax1e2c.png"} />
            <ScrollToTopButton onClick={() => navigate("/contact")} />
        </div>
    );
}
