import React from 'react';
import { ArrowRight, MapPin, Building, CheckCircle, Users } from 'lucide-react';

const CompletedProjects = ({ projects, onViewAllProjects }) => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Completed Projects
                        </h2>
                        <p className="text-xl text-gray-600">
                            Successfully delivered and fully occupied developments
                        </p>
                    </div>
                    <button
                        onClick={onViewAllProjects}
                        className="hidden md:inline-flex items-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    src={project.coverImage}
                                    alt={project.name}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                                {/* Completed Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-green-500 text-white px-3 py-1 text-sm font-bold rounded-full flex items-center">
                                        <CheckCircle className="h-4 w-4 mr-1" />
                                        Completed
                                    </span>
                                </div>

                                {/* Sold Out Badge */}
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
                                    <span className="text-sm font-bold">Sold Out</span>
                                </div>

                                {/* Project Name Overlay */}
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-bold">{project.name}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                                    <span className="text-gray-600">{project.location}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center text-gray-600 mb-2">
                                            <Building className="h-4 w-4 mr-2 text-gray-400" />
                                            <span className="text-sm">{project.unitTypes.join(', ')}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Users className="h-4 w-4 mr-2 text-gray-400" />
                                            <span className="text-sm">{project.totalUnits} Families</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-500 mb-1">Price Range</div>
                                        <div className="text-lg font-bold text-gray-900">
                                            ${project.priceRange.min.toLocaleString()} - ${project.priceRange.max.toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <div className="flex items-center text-green-800">
                                        <CheckCircle className="h-5 w-5 mr-2" />
                                        <span className="font-semibold">{project.completionDate}</span>
                                    </div>
                                    <p className="text-green-700 text-sm mt-1">
                                        Successfully delivered to {project.totalUnits} happy families
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="text-center md:hidden">
                    <button
                        onClick={onViewAllProjects}
                        className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                    >
                        View All Projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompletedProjects;
