// data/projects.js

// ✅ Current Projects
export const currentProjects = [
  {
    id: "1",
    name: "Palm Residence",
    coverImage:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Beylikdüzü, Istanbul",
    city: "Istanbul",
    unitTypes: ["2+1", "3+1"],
    features: [
      "Sea View",
      "Swimming Pool",
      "Fitness Center",
      "Children Playground",
      "Security 24/7",
      "Parking",
    ],
    completionDate: "December 2024",
    status: "Under Construction",
    priceRange: {
      min: 450000,
      max: 750000,
    },
    description:
      "Palm Residence offers luxury living with stunning sea views in the heart of Beylikdüzü. This modern residential complex features contemporary architecture, premium amenities, and easy access to shopping centers, schools, and transportation.",
    floorPlans: [
      "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8293734/pexels-photo-8293734.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    totalUnits: 120,
    availableUnits: 45,
    units: [
      {
        id: "1-1",
        type: "2+1",
        floor: 3,
        area: 95,
        price: 450000,
        status: "Available",
        view: "Sea View",
        balcony: true,
        floorPlan:
          "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "1-2",
        type: "3+1",
        floor: 5,
        area: 125,
        price: 650000,
        status: "Available",
        view: "City View",
        balcony: true,
        floorPlan:
          "https://images.pexels.com/photos/8293734/pexels-photo-8293734.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "1-3",
        type: "2+1",
        floor: 7,
        area: 100,
        price: 520000,
        status: "Reserved",
        view: "Sea View",
        balcony: true,
      },
      {
        id: "1-4",
        type: "3+1",
        floor: 8,
        area: 130,
        price: 750000,
        status: "Sold",
        view: "Sea View",
        balcony: true,
      },
    ],
  },
  {
    id: "2",
    name: "Golden Heights",
    coverImage:
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3288103/pexels-photo-3288103.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Maslak, Istanbul",
    city: "Istanbul",
    unitTypes: ["1+1", "2+1", "3+1"],
    features: [
      "City View",
      "Shopping Mall",
      "Metro Access",
      "Business Center",
      "Concierge",
      "Valet Parking",
    ],
    completionDate: "Ready",
    status: "Ready",
    priceRange: {
      min: 320000,
      max: 580000,
    },
    description:
      "Golden Heights stands tall in Istanbul's business district, offering modern urban living with premium amenities and excellent connectivity to the city center.",
    floorPlans: [
      "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    totalUnits: 200,
    availableUnits: 12,
    units: [
      {
        id: "2-1",
        type: "1+1",
        floor: 15,
        area: 65,
        price: 320000,
        status: "Available",
        view: "City View",
        balcony: true,
      },
      {
        id: "2-2",
        type: "2+1",
        floor: 20,
        area: 85,
        price: 450000,
        status: "Available",
        view: "City View",
        balcony: true,
      },
    ],
  },
];

// ✅ Completed Projects
export const completedProjects = [
  {
    id: "4",
    name: "Sunset Towers",
    coverImage:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Kadıköy, Istanbul",
    city: "Istanbul",
    unitTypes: ["2+1", "3+1", "4+1"],
    features: [
      "Bosphorus View",
      "Rooftop Garden",
      "Gym",
      "Sauna",
      "Parking",
      "Concierge",
    ],
    completionDate: "Completed 2023",
    status: "Completed",
    priceRange: {
      min: 550000,
      max: 950000,
    },
    description:
      "Sunset Towers was our flagship project completed in 2023, featuring luxury apartments with stunning Bosphorus views and premium amenities.",
    floorPlans: [],
    totalUnits: 150,
    availableUnits: 0,
    units: [],
  },
  {
    id: "5",
    name: "Marina Residences",
    coverImage:
      "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Ataköy, Istanbul",
    city: "Istanbul",
    unitTypes: ["1+1", "2+1"],
    features: [
      "Marina View",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Valet Parking",
    ],
    completionDate: "Completed 2022",
    status: "Completed",
    priceRange: {
      min: 380000,
      max: 620000,
    },
    description:
      "Marina Residences offered waterfront living with direct marina access, completed and fully sold in 2022.",
    floorPlans: [],
    totalUnits: 80,
    availableUnits: 0,
    units: [],
  },
];

// ✅ Future Projects
export const futureProjects = [
  {
    id: "3",
    name: "Garden Villas",
    coverImage:
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Çekmeköy, Istanbul",
    city: "Istanbul",
    unitTypes: ["Villa"],
    features: [
      "Private Garden",
      "Garage",
      "Fireplace",
      "Terrace",
      "BBQ Area",
      "Security",
    ],
    completionDate: "March 2025",
    status: "Planning",
    priceRange: {
      min: 850000,
      max: 1200000,
    },
    description:
      "Exclusive villa complex surrounded by nature, offering spacious family homes with private gardens and premium finishes.",
    floorPlans: [
      "https://images.pexels.com/photos/8293734/pexels-photo-8293734.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    totalUnits: 24,
    availableUnits: 24,
    units: [
      {
        id: "3-1",
        type: "Villa",
        floor: 1,
        area: 250,
        price: 950000,
        status: "Available",
        view: "Garden View",
        balcony: false,
      },
    ],
  },
  {
    id: "6",
    name: "Sky Residences",
    coverImage:
      "https://images.pexels.com/photos/3288103/pexels-photo-3288103.jpeg?auto=compress&cs=tinysrgb&w=1200",
    images: [
      "https://images.pexels.com/photos/3288103/pexels-photo-3288103.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    location: "Levent, Istanbul",
    city: "Istanbul",
    unitTypes: ["2+1", "3+1", "4+1"],
    features: [
      "Panoramic Views",
      "Sky Lounge",
      "Infinity Pool",
      "Smart Home",
      "Concierge",
    ],
    completionDate: "Q4 2025",
    status: "Planning",
    priceRange: {
      min: 750000,
      max: 1500000,
    },
    description:
      "Ultra-luxury high-rise development in Levent business district, featuring smart home technology and panoramic city views.",
    floorPlans: [],
    totalUnits: 180,
    availableUnits: 180,
    units: [],
  },
];

// ✅ All Projects (combined)
export const projects = [
  ...currentProjects,
  ...completedProjects,
  ...futureProjects,
];

// ✅ Stats
export const stats = {
  totalProjects: "15+",
  totalUnits: "2,500+",
  happyFamilies: "2,200+",
  yearsExperience: "12+",
};
