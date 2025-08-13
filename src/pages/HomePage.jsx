import HeroSlider from "../components/HomePage/HeroSlider";
import HomeAboutSection from "../components/HomePage/HomeAboutSection";
import HomeSectionNav from "../components/HomePage/HomeSectionNav";
import LetsCallYouSection from "../components/HomePage/LetsCallYouSection";
import LocationSection from "../components/HomePage/LocationSection";
import OutdoorInteriorGallery from "../components/HomePage/OutdoorInteriorGallery";
import ProjectOverviewSection from "../components/HomePage/ProjectOverviewSection";

export default function HomePage() {
    return (
        <>
            <HeroSlider />
            <HomeSectionNav />
            <HomeAboutSection />
            <ProjectOverviewSection
                title="Going for a walk in a lush grove, watching the sun go down…"
                intro="Akdam invites you to a life designed down to the finest detail with multiple unit types and a nature-integrated master plan."
                stats={[
                    { label: "Villa", value: 99 },
                    { label: "Residence", value: 78 },
                    { label: "Landscape Area (m²)", value: 4000 },
                    { label: "Total Area (m²)", value: 58950 },
                ]}
                paragraphs={[
                    "By transforming the park next to the project, we offer a living space with walking and jogging tracks and terraces where you can integrate with nature.",
                    "Hotel & Residences nearby will include premium suites and apartments, adding curated services and privileges to daily life."
                ]}
                catalogUrl="/files/akdam-project-catalog.pdf"
            />
            <LocationSection
                title="Minutes from the shoreline, connected to the city."
                lead="Place your location story here: access roads, nearby malls, healthcare, schools, and the lifestyle promise."
                addressLines={["Akdam Sales Gallery", "Atasehir Finans Merkezi", "Istanbul, Turkey"]}
                mapEmbedUrl="https://www.google.com/maps?q=Atasehir%20Istanbul&output=embed"
                directionsQuery="Akdam Sales Gallery Atasehir Istanbul"
                distances={[{ label: "Metro", value: "3 min" }, { label: "Airport", value: "30 min" }, { label: "Mall", value: "7 min" }]}
                visuals={[
                    { type: "image", src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", alt: "Aerial" },
                    { type: "image", src: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", alt: "Neighborhood" },
                    { type: "video", src: "https://res.cloudinary.com/dgbdudxqm/video/upload/q_auto,f_auto/Gray_Simple_Interior_Design_Mobile_Video_skbxys.mp4", poster: "/images/location-poster.jpg", alt: "Site video" },
                ]}
            />
            <OutdoorInteriorGallery
                outdoor={[
                    { type: "image", src: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", caption: "Main courtyard" },
                    { type: "image", src: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" },
                ]}
                interior={[
                    { type: "video", src: "https://res.cloudinary.com/dgbdudxqm/video/upload/q_auto,f_auto/Gray_Simple_Interior_Design_Mobile_Video_skbxys.mp4", poster: "/images/location-poster.jpg", alt: "Site video" },
                    { type: "image", src: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" },
                ]}
            />
            <LetsCallYouSection variant="dark" />
        </>
    );
}
