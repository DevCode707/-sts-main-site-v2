export const testMobileNavItems = [
  { label: "Services", hasChevron: true },
  { label: "Expertise", hasChevron: true },
  { label: "Company", hasChevron: true },
  { label: "Cases", hasChevron: true },
  { label: "Contact Us", hasChevron: false },
] as const;

export const testMobileSubmenus = {
  Services: [
    "Custom Software Development",
    "Web App Development",
    "Mobile App Development",
    "Dedicated Development Team",
    "Software Modernization",
    "QA & Testing",
  ],
  Expertise: [
    "Custom Ecommerce Development",
    "Ecommerce Platform Migration",
    "Headless Commerce Development",
    "UX/UI Design for Online Stores",
    "CRM, ERP Integration for Ecommerce",
    "Performance & AI Optimization",
  ],
  Company: [
    "About Us",
    "Our Team",
    "Careers",
    "Blog",
    "Testimonials",
    "Contacts",
  ],
  Cases: [
    "Ecommerce Cases",
    "SaaS Cases",
    "Healthcare Cases",
    "Fintech Cases",
    "Logistics Cases",
    "All Case Studies",
  ],
} as const;
