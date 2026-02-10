import { PropertyDetails, SectionLink, AgentDetails } from './types';

// TOGGLE THIS TO FALSE TO SHOW THE FULL WEBSITE
export const SHOW_COMING_SOON = true;

export const AGENT_INFO: AgentDetails = {
  name: "“Patricia” Julie Schilling",
  phone: "(520) 705-1798",
  email: "patricia@eliterealestatepros.com",
  website: "www.eliterealestatepros.com"
};

export const PROPERTY_INFO: PropertyDetails = {
  address: "504 E Black Diamond Dr",
  cityStateZip: "Casa Grande, AZ 85122",
  price: "$419,000",
  status: "For Sale",
  beds: 4,
  baths: 2,
  sqft: 2708,
  garage: 3,
  description: "Welcome to this immaculate single-level residence that perfectly blends modern comfort with desert elegance. Situated in a sought-after Casa Grande neighborhood, this 4-bedroom home offers an expansive open-concept layout designed for effortless living and entertaining. The gourmet kitchen features ample counter space and modern appliances, flowing seamlessly into a light-filled great room. Outside, discover your private retreat with a covered patio and professionally designed low-maintenance landscaping—ideal for enjoying Arizona's beautiful sunsets. With a spacious 3-car garage and significant energy savings from the installed solar system, this home checks every box for luxury and practicality.",
  features: [
    "Open Concept Living",
    "Gourmet Kitchen",
    "Expansive Master Suite",
    "3-Car Garage",
    "Energy Efficient Solar",
    "Covered Outdoor Patio",
    "Low Maintenance Landscape",
    "Quiet Community"
  ]
};

export const NAVIGATION_LINKS: SectionLink[] = [
  { label: "Home", href: "#home" },
  { label: "Details", href: "#details" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#map" },
];

export const DROPDOWN_LINKS: SectionLink[] = [
  { label: "HOA Details", href: "#hoa" },
  { label: "Solar Benefits", href: "#solar" },
];