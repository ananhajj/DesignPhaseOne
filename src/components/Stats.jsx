import React from 'react';
import { Users, TreePine, MapPin } from 'lucide-react';

const Stats = () => {
    const statistics = [
        {
            icon: Users,
            value: '20,000+',
            label: 'Expected Population',
            color: 'text-blue-600'
        },
        {
            icon: TreePine,
            value: '260%',
            label: 'Green Space Ratio',
            color: 'text-green-600'
        },
        {
            icon: MapPin,
            value: '1,050+',
            label: 'City Area (km²)',
            color: 'text-yellow-600'
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {statistics.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div
                                className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-opacity-10 mb-6 ${stat.color.replace('text-', 'bg-')} group-hover:scale-110 transition-transform duration-200`}
                            >
                                <stat.icon className={`h-10 w-10 ${stat.color}`} />
                            </div>
                            <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
                                {stat.value}
                            </div>
                            <div className="text-lg font-medium text-gray-600 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
