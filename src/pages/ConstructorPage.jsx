import ConstructHorizontalShowcase from "../components/construct/ConstructSlider";
import ProjectSection from "../components/construct/ProjectSection";
import LetsCallYouSection from "../components/HomePage/LetsCallYouSection";
import {
    commercialProjects,
    infrastructureProjects,
    residentialProjects,
    specialtyProjects,
} from "../data/projects";

export default function ConstructorPage() {
    return (
        <>
            <ConstructHorizontalShowcase />

            <ProjectSection
                title="AKDAM PROJECTS"
                subtitle="Residential Excellence"
                projects={residentialProjects}
                background="light"
                sectionId="residential-projects"
            />

            <ProjectSection
                title="Commercial Masterpieces"
                subtitle="Business Solutions"
                projects={commercialProjects}
                background="dark"
                sectionId="commercial-projects"
            />

            <ProjectSection
                title="Infrastructure Excellence"
                subtitle="Building Tomorrow"
                projects={infrastructureProjects}
                background="light"
                sectionId="infrastructure-projects"
            />

            <ProjectSection
                title="Specialty Constructions"
                subtitle="Unique Solutions"
                projects={specialtyProjects}
                background="dark"
                sectionId="specialty-projects"
            />

     
            <LetsCallYouSection variant="light" />
        </>
    );
}

