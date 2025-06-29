import React from 'react';
import { ArrowRight, MapPin, Building, Calendar, Eye } from 'lucide-react';

const CurrentProjects = ({ projects, onViewProject, onViewAllProjects }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Ready':
                return 'bg-green-500 text-white';
            case 'Under Construction':
                return 'bg-yellow-500 text-black';
            default:
                return 'bg-blue-500 text-white';
        }
    };

    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Current Projects
                        </h2>
                        <p className="text-xl text-gray-600">
                            Available for purchase now - Limited units remaining
                        </p>
                    </div>
                    <button
                        onClick={onViewAllProjects}
                        className="hidden md:inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                    src={project.coverImage}
                                    alt={project.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                {/* Status Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-sm font-bold rounded-full ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Availability Badge */}
                                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                                    <span className="text-sm font-bold text-gray-900">
                                        {project.availableUnits} Units Left
                                    </span>
                                </div>

                                {/* Bottom Info Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                    <div className="flex items-center mb-2">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span className="text-sm">{project.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <Building className="h-4 w-4 mr-2 text-yellow-500" />
                                        <span className="text-sm">{project.unitTypes.join(', ')}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="h-4 w-4 mr-2 text-yellow-500" />
                                        <span className="text-sm">{project.completionDate}</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="text-sm text-gray-500 mb-1">Starting from</div>
                                    <div className="text-2xl font-bold text-gray-900">
                                        ${project.priceRange.min.toLocaleString()}
                                    </div>
                                </div>

                                <button
                                    onClick={() => onViewProject(project.id)}
                                    className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center"
                                >
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Units & Pricing
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="text-center md:hidden">
                    <button
                        onClick={onViewAllProjects}
                        className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CurrentProjects;
