import React, { useState } from 'react';
import {
    ArrowLeft, MapPin, Building, Calendar, Users,
    ChevronLeft, ChevronRight, Download, Eye, Star
} from 'lucide-react';

const ProjectDetails = ({ project, onBack, onReserveUnit }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedUnitType, setSelectedUnitType] = useState('All');

    const nextImage = () => {
        setCurrentImageIndex(prev => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Available':
                return 'bg-green-100 text-green-800';
            case 'Reserved':
                return 'bg-yellow-100 text-yellow-800';
            case 'Sold':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getProjectStatusColor = (status) => {
        switch (status) {
            case 'Ready':
                return 'bg-green-100 text-green-800';
            case 'Under Construction':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-blue-100 text-blue-800';
        }
    };

    const filteredUnits = selectedUnitType === 'All'
        ? project.units
        : project.units.filter(unit => unit.type === selectedUnitType);

    const unitTypes = ['All', ...project.unitTypes];

    return (
        <div className="py-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-yellow-600 mb-8 transition-colors duration-200"
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Projects
                </button>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    <div className="relative">
                        <div className="h-96 overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={project.images[currentImageIndex]}
                                alt={project.name}
                            />
                        </div>

                        {project.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity duration-200"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity duration-200"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </>
                        )}

                        <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getProjectStatusColor(project.status)}`}>
                                {project.status}
                            </span>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="h-5 w-5 mr-3 text-yellow-500" />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Building className="h-5 w-5 mr-3 text-yellow-500" />
                                        <span>{project.unitTypes.join(', ')} Units</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="h-5 w-5 mr-3 text-yellow-500" />
                                        <span>Completion: {project.completionDate}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Users className="h-5 w-5 mr-3 text-yellow-500" />
                                        <span>{project.availableUnits} of {project.totalUnits} Available</span>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
                                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                                </div>

                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Features</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {project.features.map((feature, index) => (
                                            <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                                                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {project.floorPlans.length > 0 && (
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Floor Plans</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.floorPlans.map((plan, index) => (
                                                <div key={index} className="relative group">
                                                    <img
                                                        src={plan}
                                                        alt={`Floor plan ${index + 1}`}
                                                        className="w-full h-48 object-cover rounded-lg"
                                                    />
                                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                                                        <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold transition-opacity duration-200 flex items-center">
                                                            <Download className="h-4 w-4 mr-2" />
                                                            Download
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="lg:col-span-1">
                                <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                                    <div className="text-center mb-6">
                                        <div className="text-3xl font-bold text-gray-900 mb-2">
                                            ${project.priceRange.min.toLocaleString()} - ${project.priceRange.max.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-gray-600">Price Range</div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Status:</span>
                                            <span className="font-semibold">{project.status}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Total Units:</span>
                                            <span className="font-semibold">{project.totalUnits}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Available:</span>
                                            <span className="font-semibold text-green-600">{project.availableUnits}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Completion:</span>
                                            <span className="font-semibold">{project.completionDate}</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 mb-4">
                                        Contact Sales Team
                                    </button>

                                    <button className="w-full border-2 border-yellow-500 text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-200">
                                        Schedule Site Visit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Available Units</h2>
                        <select
                            value={selectedUnitType}
                            onChange={(e) => setSelectedUnitType(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                            {unitTypes.map(type => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredUnits.map(unit => (
                            <div key={unit.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-xl font-bold text-gray-900">{unit.type}</div>
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(unit.status)}`}>
                                        {unit.status}
                                    </span>
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Floor:</span>
                                        <span className="font-medium">{unit.floor}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Area:</span>
                                        <span className="font-medium">{unit.area} m²</span>
                                    </div>
                                    {unit.view && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">View:</span>
                                            <span className="font-medium">{unit.view}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Balcony:</span>
                                        <span className="font-medium">{unit.balcony ? 'Yes' : 'No'}</span>
                                    </div>
                                </div>

                                <div className="text-2xl font-bold text-gray-900 mb-4">
                                    ${unit.price.toLocaleString()}
                                </div>

                                {unit.floorPlan && (
                                    <button className="w-full mb-3 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                                        <Eye className="h-4 w-4 mr-2" />
                                        View Floor Plan
                                    </button>
                                )}

                                <button
                                    onClick={() => onReserveUnit(unit.id)}
                                    disabled={unit.status !== 'Available'}
                                    className={`w-full px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${unit.status === 'Available'
                                            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    {unit.status === 'Available' ? 'Reserve Unit' : unit.status}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
