// ✅ مثال على وحدة واحدة (Unit)
export const UnitExample = {
  id: "unit-001",
  type: "2+1", // الخيارات: '1+1', '2+1', '3+1', '4+1', 'Studio', 'Duplex', 'Villa'
  floor: 3,
  area: 110,
  price: 150000,
  status: "Available", // 'Reserved', 'Sold'
  view: "Sea View",
  balcony: true,
  floorPlan: "/floorplans/unit-001.jpg",
};

// ✅ مثال على مشروع (Project)
export const ProjectExample = {
  id: "project-001",
  name: "Skyline Towers",
  coverImage: "/images/projects/skyline/cover.jpg",
  images: ["/images/projects/skyline/1.jpg", "/images/projects/skyline/2.jpg"],
  location: "Ataşehir, Istanbul",
  city: "Istanbul",
  unitTypes: ["1+1", "2+1", "3+1"],
  features: ["Swimming Pool", "Gym", "24/7 Security", "Green Spaces"],
  completionDate: "2025-06-30",
  status: "Under Construction", // أو 'Ready', 'Planning', 'Completed'
  priceRange: {
    min: 120000,
    max: 280000,
  },
  description:
    "A modern residence with great city access and premium lifestyle amenities.",
  floorPlans: ["/floorplans/skyline/1+1.jpg", "/floorplans/skyline/2+1.jpg"],
  units: [UnitExample],
  totalUnits: 80,
  availableUnits: 35,
  mapLocation: {
    lat: 41.0218,
    lng: 29.0561,
  },
};

// ✅ مثال على إحصائيات (Stats)
export const StatsExample = {
  totalProjects: "15",
  totalUnits: "1200",
  happyFamilies: "950",
  yearsExperience: "10",
};

// ✅ مثال على مستخدم (User)
export const UserExample = {
  id: "user-001",
  name: "Ali Demir",
  email: "ali@example.com",
  phone: "+90 555 123 4567",
  isAgent: true,
};
