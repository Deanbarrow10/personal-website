// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/dean.barrow.5015/",
  x: "https://twitter.com/dean_b20",
  github: "https://github.com/Deanbarrow10",
  linkedIn: "https://www.linkedin.com/in/dbarrow10",
  slack: "https://stanfordesrg.slack.com/team/U06S5RM2Y8M",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};