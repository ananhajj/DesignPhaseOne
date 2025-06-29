import React from 'react';
import { ArrowRight, MapPin, Building } from 'lucide-react';

const FeaturedProjects = ({ projects, onViewProject }) => {
    const featuredProjects = projects.slice(0, 3);

    const getProjectTypeLabel = (unitTypes) => {
        if (unitTypes.includes('Villa')) return 'Luxury Villas';
        if (unitTypes.includes('3+1')) return 'Premium Apartments';
        if (unitTypes.includes('2+1')) return 'Modern Residences';
        return 'Residential Units';
    };

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our exceptional residential developments designed for modern living
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    src={project.coverImage}
                                    alt={project.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Status Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-sm font-bold rounded-full ${project.status === 'Ready'
                                            ? 'bg-green-500 text-white'
                                            : project.status === 'Under Construction'
                                                ? 'bg-yellow-500 text-black'
                                                : 'bg-blue-500 text-white'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Arrow Button */}
                                <button
                                    onClick={() => onViewProject(project.id)}
                                    className="absolute bottom-4 right-4 w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-yellow-400"
                                >
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">
                                        {getProjectTypeLabel(project.unitTypes)}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-200">
                                    {project.name}
                                </h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="h-4 w-4 mr-3 text-yellow-500" />
                                        <span className="text-sm">{project.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Building className="h-4 w-4 mr-3 text-yellow-500" />
                                        <span className="text-sm">{project.unitTypes.join(', ')} Units</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm text-gray-500">Starting from</div>
                                        <div className="text-xl font-bold text-gray-900">
                                            ${project.priceRange.min.toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-500">Available Units</div>
                                        <div className="text-lg font-bold text-green-600">
                                            {project.availableUnits}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjects;
