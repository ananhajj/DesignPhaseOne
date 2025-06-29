import React from 'react';
import { Clock, Building2, Handshake, ArrowRight } from 'lucide-react';

const WelcomeSection = ({ onSeeMore }) => {
    const keyPoints = [
        {
            icon: Clock,
            title: 'On-Time Delivery',
            description: 'Completing projects on time & following budget'
        },
        {
            icon: Building2,
            title: 'Quality Workmanship',
            description: 'Elevated quality of workmanship in every detail'
        },
        {
            icon: Handshake,
            title: 'Diverse Requirements',
            description: 'Meeting diverse supplier and client requirements'
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="relative">
                        <img
                            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Modern high-rise building"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-2xl"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Welcome to <span className="text-yellow-500">Akdam</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            We are a leading construction and real estate development company specializing in
                            premium residential projects across Istanbul. With over a decade of experience,
                            we transform urban landscapes by creating exceptional living spaces that combine
                            modern architecture with sustainable design principles.
                        </p>

                        {/* Key Points */}
                        <div className="space-y-8 mb-12">
                            {keyPoints.map((point, index) => {
                                const Icon = point.icon;
                                return (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mr-6">
                                            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                                                <Icon className="h-7 w-7 text-yellow-600" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {point.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            onClick={onSeeMore}
                            className="inline-flex items-center bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-200"
                        >
                            See More
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeSection;
