// Mock data for Blue Horizon Landscaping website

export const mockQuoteSubmissions = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "(631) 555-0123",
    service: "garden-design",
    message: "I'm looking to redesign my backyard garden. It's about 500 sq ft and gets partial sun. I'd like some colorful flowers and maybe a small seating area.",
    timestamp: "2025-01-15T10:30:00Z",
    status: "pending"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@gmail.com", 
    phone: "(631) 555-0456",
    service: "lawn-care",
    message: "Need weekly lawn maintenance service starting in spring. My property is about 0.5 acres with some slopes and mature trees.",
    timestamp: "2025-01-14T15:45:00Z",
    status: "contacted"
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mwilson@email.com",
    phone: "(631) 555-0789", 
    service: "hardscaping",
    message: "Interested in a stone patio installation. Looking for something about 12x16 feet with natural stone. Also considering a fire pit area.",
    timestamp: "2025-01-13T09:15:00Z",
    status: "quoted"
  }
];

export const mockServices = [
  {
    id: 1,
    title: "Garden Design",
    shortDescription: "Custom garden designs that flourish year-round",
    fullDescription: "From concept to creation, we design gardens that flourish year-round with sustainable practices and stunning aesthetics. Our expert designers work with you to create outdoor spaces that reflect your personal style while thriving in our local climate.",
    features: [
      "Custom plant selection based on your soil and light conditions",
      "Seasonal planning for year-round beauty and interest", 
      "Water-wise designs that reduce maintenance and costs",
      "Hardscape integration for structure and functionality",
      "Native plant emphasis for sustainability",
      "Color and texture coordination for visual impact"
    ],
    priceRange: "$2,000 - $15,000",
    timeline: "2-4 weeks design, 1-3 weeks installation",
    category: "design"
  },
  {
    id: 2,
    title: "Lawn Care",
    shortDescription: "Professional maintenance for healthy, vibrant lawns",
    fullDescription: "Weekly and seasonal maintenance for healthy, vibrant lawns that enhance your property's curb appeal. Our comprehensive lawn care program ensures your grass stays thick, green, and weed-free throughout the growing season.",
    features: [
      "Regular mowing with sharp, clean blades",
      "Comprehensive fertilization programs",
      "Pre-emergent and post-emergent weed control",
      "Seasonal cleanup and dethatching",
      "Aeration and overseeding services",
      "Insect and disease management"
    ],
    priceRange: "$150 - $400 per month",
    timeline: "Weekly service, seasonal programs",
    category: "maintenance"
  },
  {
    id: 3,
    title: "Hardscaping", 
    shortDescription: "Stone features and outdoor living spaces",
    fullDescription: "Patios, walkways, and stone features that complement your landscape and create lasting outdoor living spaces. Our hardscaping services add structure, function, and beauty to your outdoor environment.",
    features: [
      "Custom stonework and masonry",
      "Patio and deck installation", 
      "Walkway and pathway design",
      "Retaining walls and terracing",
      "Fire pits and outdoor fireplaces",
      "Water features and fountains"
    ],
    priceRange: "$5,000 - $50,000+",
    timeline: "1-4 weeks depending on scope",
    category: "construction"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    location: "East Hampton, NY",
    rating: 5,
    text: "Blue Horizon transformed our backyard into a beautiful oasis. The team was professional, punctual, and the results exceeded our expectations. Our property value definitely increased!",
    service: "Garden Design",
    date: "2024-12-15"
  },
  {
    id: 2, 
    name: "Robert Chen",
    location: "Smithtown, NY",
    rating: 5,
    text: "We've been using Blue Horizon for lawn care for 3 years now. Our lawn has never looked better, and their attention to detail is impressive. Highly recommend!",
    service: "Lawn Care",
    date: "2024-11-22"
  },
  {
    id: 3,
    name: "Lisa Thompson", 
    location: "Huntington, NY",
    rating: 5,
    text: "The stone patio and walkway they installed are absolutely gorgeous. The craftsmanship is top-notch and they finished exactly on time. Worth every penny!",
    service: "Hardscaping",
    date: "2024-10-08"
  }
];

export const mockCompanyStats = {
  yearsInBusiness: 15,
  projectsCompleted: 500,
  happyClients: 450,
  teamMembers: 12,
  serviceArea: "Suffolk County, NY",
  establishedYear: 2010,
  certifications: [
    "Licensed & Insured",
    "Certified Landscape Professional",
    "Sustainable Landscape Specialist",
    "Irrigation Association Member"
  ]
};

export const mockContactInfo = {
  phone: "(631) 555-7890",
  email: "info@bluehorizonlandscaping.com",
  address: "Suffolk County, NY",
  hours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM", 
    sunday: "Closed"
  },
  emergencyContact: "(631) 555-7890",
  serviceRadius: "30 miles from Suffolk County"
};