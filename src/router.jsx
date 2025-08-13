// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import ConstructorLayout from "./layouts/ConstructorLayout.jsx";
import HRLayout from "./layouts/HRLayout.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";

import ProjectsRoute from "./components/ProjectsRoute.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ConstructorPage from "./pages/ConstructorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import HRPage from "./pages/HRPage.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import OngoingProjectsPage from "./components/OngoingProjectsPage.jsx";
//import Projects from "./pages/Projects.jsx";
//import ProjectDetails from "./pages/ProjectDetails.jsx";
//import AboutUs from "./pages/AboutUs.jsx";
//import ContactUs from "./pages/ContactUs.jsx";

 
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
           // { path: "projects/:id", element: <ProjectDetails /> },
            //{ path: "about", element: <AboutUs /> },
           // { path: "contact", element: <ContactUs /> },
        ],
    },
    {
        path: "/akdam-construct",
        element: <ConstructorLayout />,
        children: [
            { index: true, element: <ConstructorPage /> },
            { path: "projects", element: <ProjectsRoute /> }, 
            { path: "projects/on-going", element: <OngoingProjectsPage /> }, 
             
            { path: "project/:id", element: <ProjectDetails /> }, 
        ],
    },
    {
        path: "/hr",
        element: <HRLayout />,
        children: [
            { index: true, element: <HRPage /> },
        ],
    },
 
]);

export default router;
