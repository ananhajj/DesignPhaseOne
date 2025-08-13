// src/routes/ProjectsRoute.jsx
import { useLocation, useNavigate } from "react-router-dom";
import ProjectListing from "../components/ProjectListing";
import {  projects } from "../data/project";
import { useState } from "react";
 

export default function ProjectsRoute() {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);



    const handleViewProject = (id) => {
     
        navigate(`/akdam-construct/project/${id}`);
    };
 

    return (
        <ProjectListing
            projects={projects}               
            onViewProject={handleViewProject}   
        />
    );
}
