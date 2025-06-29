import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
import WelcomeSection from './components/WelcomeSection';
import CurrentProjects from './components/CurrentProjects';
import CompletedProjects from './components/CompletedProjects';
import FutureProjects from './components/FutureProjects';
import Stats from './components/Stats';
import ProjectListing from './components/ProjectListing';
import ProjectDetails from './components/ProjectDetails';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import HeroSlider from './components/HeroSlider';

import { currentProjects, completedProjects, futureProjects, projects } from './data/projects';

function HomePage({ onViewProject }) {
  return (
    <>
      <HeroSlider />
      <Stats /> 
 
      <CurrentProjects
        projects={currentProjects}
        onViewProject={onViewProject}
        onViewAllProjects={() => window.location.href = '/projects'}
      />
      <CompletedProjects
        projects={completedProjects}
        onViewAllProjects={() => window.location.href = '/projects'}
      />
      <FutureProjects
        projects={futureProjects}
        onViewProject={onViewProject}
        onViewAllProjects={() => window.location.href = '/projects'}
      />
      <WelcomeSection onSeeMore={() => window.location.href = '/about'} />

    </>
  );
}

function AppContent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const mainClass = `${isHomePage ? '' : 'pt-20 mb-10'}`;

  const handleViewProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      navigate('/project-details');
    }
  };

  const handleReserveUnit = (unitId) => {
    if (!user) {
      alert('Please login to reserve a unit.');
      navigate('/login');
      return;
    }
    console.log('Reserve unit:', unitId);
    alert('Unit reservation functionality will be implemented with user authentication.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className={mainClass}>
        <Routes>
          <Route path="/" element={<HomePage onViewProject={handleViewProject} />} />
          <Route path="/projects" element={<ProjectListing projects={projects} onViewProject={handleViewProject} />} />
          <Route path="/about" element={<AboutUs onContact={() => navigate('/contact')} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/project-details" element={<ProjectDetails project={selectedProject} onBack={() => navigate('/projects')} onReserveUnit={handleReserveUnit} />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContactButton onClick={() => navigate('/contact')} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
