import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Building2, Users, Phone, LogIn, UserPlus, Globe } from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ currentPage, onPageChange }) => {
 
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [language, setLanguage] = useState('EN');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'AR' : 'EN');
    };

    const isHomePage = location.pathname === '/';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <Building2 className={`w-8 h-8 mr-3 ${isScrolled || !isHomePage ? 'text-blue-600' : 'text-white'
                            }`} />
                        <span className={`text-xl font-bold ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                            }`}>
                            Cyprus Real Estate
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`font-medium hover:text-blue-600 transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                                } ${location.pathname === '/' ? 'text-blue-600' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className={`font-medium hover:text-blue-600 transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                                } ${location.pathname === '/projects' ? 'text-blue-600' : ''}`}
                        >
                            Projects
                        </Link>
                        <Link
                            to="/about"
                            className={`font-medium hover:text-blue-600 transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                                } ${location.pathname === '/about' ? 'text-blue-600' : ''}`}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className={`font-medium hover:text-blue-600 transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                                } ${location.pathname === '/contact' ? 'text-blue-600' : ''}`}
                        >
                            Contact
                        </Link>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className={`flex items-center px-3 py-1 rounded-md transition-colors duration-300 ${isScrolled || !isHomePage
                                    ? 'text-gray-900 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/10'
                                }`}
                        >
                            <Globe className="w-4 h-4 mr-1" />
                            <span className="text-sm font-semibold">{language}</span>
                        </button>

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-md ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                                }`}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                to="/"
                                className="block px-3 py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/projects"
                                className="block px-3 py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                to="/about"
                                className="block px-3 py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-3 py-2 text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="flex items-center justify-between px-3 py-2">
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
                                >
                                    <Globe className="w-4 h-4 mr-2" />
                                    <span className="font-semibold">{language}</span>
                                </button>

                                <Link
                                    to="/contact"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
          </nav>
    );
};

export default Navigation;
