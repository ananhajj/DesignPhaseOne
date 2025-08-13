import React from "react";
import {
    Building2,
    Home,
    Car,
    TrendingUp,
    Award,
    Users,
} from "lucide-react";
import Container from "../ui/Container";
import { useNavigate } from "react-router-dom";

const COMPANY_DIVISIONS = [
    {
        icon: Building2,
        title: "Akdam Construct",
        description:
            "Premium residential & commercial developments crafted with architectural excellence and sustainable practices.",
        color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200",
        iconColor: "text-blue-600",
    },
    {
        icon: Home,
        title: "Akdam Home & Furniture",
        description:
            "Curated interior solutions and bespoke furniture pieces designed to complement your lifestyle perfectly.",
        color: "bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200",
        iconColor: "text-emerald-600",
    },
    {
        icon: TrendingUp,
        title: "Akdam Investment",
        description:
            "Strategic investment opportunities and financial solutions tailored for discerning investors.",
        color: "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200",
        iconColor: "text-purple-600",
    },
    {
        icon: Car,
        title: "Akdam Cars",
        description:
            "Premium automotive services and luxury vehicle solutions for our exclusive clientele.",
        color: "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200",
        iconColor: "text-orange-600",
    },
];

const ACHIEVEMENTS = [
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: Building2, label: "Projects Delivered", value: "150+" },
    { icon: Users, label: "Happy Families", value: "5,000+" },
    { icon: TrendingUp, label: "Years Experience", value: "15+" },
];

export default function HomeAboutSection() {
    const navigate =useNavigate();
    return (
        <section
            id="about"
            className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
        >
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                        <Award className="w-4 h-4" />
                        About Akdam
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Crafting Spaces,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                            Building Dreams
                        </span>
                    </h2>

                    <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We are a multidisciplinary group united by excellence—Construction,
                        Home, Furniture, Investment, and Cars— committed to delivering
                        thoughtful design, superior execution, and enduring value.
                    </p>
                </div>

                {/* Achievements Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {ACHIEVEMENTS.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-8 h-8 text-amber-600" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                                    {achievement.value}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {achievement.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Company Divisions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {COMPANY_DIVISIONS.map((division, index) => {
                        const Icon = division.icon;
                        return (
                            <div
                                key={index}
                                className={`${division.color} rounded-3xl p-8 border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 group`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                                            <Icon className={`w-7 h-7 ${division.iconColor}`} />
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                                            {division.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {division.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call-to-Action */}
                <div className="text-center">
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <button 
                        onClick={()=>navigate('/about')}
                        className="group px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <span className="flex items-center justify-center gap-2">
                                Learn More About Us
                                <svg
                                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </button>
                        <button className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-amber-300 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            View Our Projects
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
