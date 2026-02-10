export interface PropertyDetails {
  address: string;
  cityStateZip: string;
  price: string;
  status: string;
  beds: number;
  baths: number;
  sqft: number;
  garage: number;
  description: string;
  features: string[];
}

export interface SectionLink {
  label: string;
  href: string;
  isDropdown?: boolean;
  subItems?: SectionLink[];
}

export interface AgentDetails {
  name: string;
  phone: string;
  email: string;
  website: string;
}