export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "meetmaps",
    title: "MeetMaps Event Platform",
    description: "Event management platform built with micro-frontend architecture, allowing seamless integration of multiple frontend applications. Features real-time event tracking, user management, and advanced analytics.",
    image: "/projects/meetmaps.jpg",
    technologies: ["React", "TypeScript", "Micro-frontend", "Redux", "Node.js", "Material UI"],
    demoUrl: "https://meetmaps.com", // Update with actual URL
    codeUrl: "", // Private repository
    featured: true
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS System",
    description: "Modern point-of-sale system for restaurants with real-time order tracking, inventory management, and sales analytics. Built with React and TypeScript for optimal performance.",
    image: "/projects/restaurant-pos.jpg",
    technologies: ["React", "TypeScript", "Material UI", "Node.js", "Socket.io"],
    demoUrl: "", // Private system
    codeUrl: "", // Private repository
    featured: true
  },
  {
    id: "logistics-marketplace",
    title: "Logistics Marketplace",
    description: "Platform connecting shippers with carriers, featuring real-time tracking and automated quote generation. Achieved 60% performance improvement through optimization.",
    image: "/projects/logistics-marketplace.jpg", 
    technologies: ["Vue.js", "JavaScript", "Vuex", "REST APIs", "Webpack"],
    demoUrl: "", // Update with actual URL
    codeUrl: "", // Private repository
    featured: true
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Solutions",
    description: "Custom e-commerce platform with product management, payment integration, and customer analytics. Built scalable solutions for multiple clients.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Payment APIs"],
    demoUrl: "",
    codeUrl: "",
    featured: false
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    description: "Financial technology dashboard with real-time data visualization, transaction monitoring, and advanced reporting features.",
    image: "/projects/fintech.jpg",
    technologies: ["React", "D3.js", "Chart.js", "TypeScript", "WebSocket"],
    demoUrl: "",
    codeUrl: "",
    featured: false
  },
  {
    id: "healthcare-app",
    title: "Healthcare Management App",
    description: "Healthcare management application with patient records, appointment scheduling, and telemedicine capabilities.",
    image: "/projects/healthcare.jpg",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL", "WebRTC"],
    demoUrl: "",
    codeUrl: "",
    featured: false
  }
];
