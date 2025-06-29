import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Building, Calendar, Users, Eye } from 'lucide-react';

const ProjectListing = ({ projects, onViewProject }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedCity, setSelectedCity] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.location.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = selectedStatus === 'All' || project.status === selectedStatus;
            const matchesCity = selectedCity === 'All' || project.city === selectedCity;
            return matchesSearch && matchesStatus && matchesCity;
        });
    }, [projects, searchTerm, selectedStatus, selectedCity]);

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const displayedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

    const uniqueStatuses = ['All', ...Array.from(new Set(projects.map(p => p.status)))];
    const uniqueCities = ['All', ...Array.from(new Set(projects.map(p => p.city)))];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Ready':
                return 'bg-green-100 text-green-800';
            case 'Under Construction':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-blue-100 text-blue-800';
        }
    };

    return (
        <div className="py-16 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        All Projects
                    </h1>
                    <p className="text-xl text-gray-600">
                        Explore our complete portfolio of residential developments
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            />
                        </div>

                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                            {uniqueStatuses.map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>

                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        >
                            {uniqueCities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                                {filteredProjects.length} projects found
                            </span>
                            <Filter className="h-5 w-5 text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    src={project.coverImage}
                                    alt={project.name}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                                        {project.availableUnits}/{project.totalUnits} Available
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {project.name}
                                </h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                                        <span className="text-sm">{project.location}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Building className="h-4 w-4 mr-2 text-yellow-500" />
                                        <span className="text-sm">{project.unitTypes.join(', ')}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Calendar className="h-4 w-4 mr-2 text-yellow-500" />
                                        <span className="text-sm">{project.completionDate}</span>
                                    </div>
                                </div>

                                <div className="text-xl font-bold text-gray-900 mb-4">
                                    ${project.priceRange.min.toLocaleString()} - ${project.priceRange.max.toLocaleString()}
                                </div>

                                <button
                                    onClick={() => onViewProject(project.id)}
                                    className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center"
                                >
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Units
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg ${currentPage === page
                                        ? 'bg-yellow-500 text-white'
                                        : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectListing;
