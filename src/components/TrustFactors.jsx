import React from 'react';
import { MapPin, Shield, Building2, Clock } from 'lucide-react';

const trustFactors = [
    {
        icon: <MapPin className="w-8 h-8" />,
        title: 'Prime Location',
        description: 'Apartments located in central Famagusta near the beach and all amenities.'
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: 'Trusted Developer',
        description: 'Licensed with 10+ years of proven real estate delivery and excellence.'
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        title: 'High Quality',
        description: 'European-standard materials and modern interior finishes throughout.'
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: 'On-Time Delivery',
        description: 'All projects delivered exactly as scheduled with full transparency.'
    }
];

export default function TrustFactors() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Buy From Us
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We've built our reputation on trust, quality, and exceptional service.
                        Here's what sets us apart in the real estate market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trustFactors.map((factor, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-blue-100 group-hover:bg-blue-600 rounded-full p-4 mb-6 transition-all duration-300">
                                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                                        {factor.icon}
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    {factor.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {factor.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
