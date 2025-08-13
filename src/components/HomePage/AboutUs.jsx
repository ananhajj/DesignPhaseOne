import React from 'react';
import {
    Award, Users, Building2, Target,
    ArrowRight, CheckCircle
} from 'lucide-react';

const AboutUs = ({ onContact }) => {
    const strengths = [
        {
            icon: Award,
            title: 'Quality Construction',
            description: 'Premium materials and construction techniques ensuring lasting value and durability'
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Experienced architects, engineers, and project managers with proven track records'
        },
        {
            icon: Building2,
            title: 'Modern Design',
            description: 'Contemporary architectural designs that blend functionality with aesthetic appeal'
        },
        {
            icon: Target,
            title: 'Customer Focus',
            description: 'Dedicated to exceeding client expectations throughout the entire development process'
        }
    ];

    const achievements = [
        'ISO 9001 Quality Management Certification',
        'Green Building Council Member',
        'Best Residential Developer Award 2023',
        'Customer Satisfaction Rating: 98%',
        'Zero Accident Safety Record',
        'On-Time Delivery Guarantee'
    ];

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            About ConstructCorp
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            With over a decade of excellence in residential construction, ConstructCorp has established
                            itself as a leading developer of premium residential projects across Istanbul and beyond.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We specialize in creating exceptional residential developments that combine modern architecture,
                            premium amenities, and strategic locations. Our project-by-project approach ensures that each
                            development receives our full attention and resources, resulting in superior quality and
                            customer satisfaction.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Achievements</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={onContact}
                            className="inline-flex items-center px-6 py-3 border border-yellow-500 text-yellow-600 font-semibold rounded-lg hover:bg-yellow-50 transition-colors duration-200"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>

                    <div className="relative">
                        <img
                            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="About ConstructCorp"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ConstructCorp</h2>
                        <p className="text-xl text-gray-600">Our core strengths that set us apart</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strengths.map((strength, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <strength.icon className="h-8 w-8 text-yellow-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {strength.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {strength.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-yellow-600 mb-2">12+</div>
                            <div className="text-gray-600">Years of Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
                            <div className="text-gray-600">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-600 mb-2">2,500+</div>
                            <div className="text-gray-600">Units Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
                            <div className="text-gray-600">Customer Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
