import React, { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
    const [language, setLanguage] = useState('EN');

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'EN' ? 'AR' : 'EN'));
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <Building2 className="h-10 w-10 text-yellow-500 mr-3" />
                            <span className="text-2xl font-bold">Akdam</span>
                        </div>
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed max-w-md">
                            Leading construction and real estate development company creating exceptional
                            residential projects across Istanbul with modern architecture and sustainable design.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-lg">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-lg">All Projects</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-lg">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-lg">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 text-lg">Agent Portal</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                                <div className="text-gray-400">
                                    <p className="text-lg">Maslak Business Center</p>
                                    <p>Büyükdere Caddesi No: 255</p>
                                    <p>34398 Istanbul, Turkey</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-6 w-6 text-yellow-500 mr-3" />
                                <span className="text-gray-400 text-lg">+90 212 555 0100</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-6 w-6 text-yellow-500 mr-3" />
                                <span className="text-gray-400 text-lg">info@akdam.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-lg">
                            © 2024 Akdam Construction. All rights reserved.
                        </p>

                        {/* Language Switcher */}
                        <div className="flex items-center mt-4 md:mt-0">
                            <Globe className="h-5 w-5 text-gray-400 mr-2" />
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-2 text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                            >
                                <span className={`px-2 py-1 rounded ${language === 'EN' ? 'bg-yellow-500 text-black' : ''}`}>
                                    EN
                                </span>
                                <span className="text-gray-600">|</span>
                                <span className={`px-2 py-1 rounded ${language === 'AR' ? 'bg-yellow-500 text-black' : ''}`}>
                                    AR
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
