import { SiAutocad, SiV } from "react-icons/si";
import { BsBadge3dFill } from "react-icons/bs";
import { SiCoronarenderer } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAutodeskrevit } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
];

export const PROFILE = {
  name: "Tamuna Kvantaliani",
  role: "3D Visualizer",
  subheading:
    "I'm a passionate 3D interior designer eager to bring creativity to life. While new to the field, I bring 3 years of online customer service experience, excelling in communication, problem-solving, and understanding client needs. I'm ready to turn spaces into stories!",
};

export const PROJECTS = [
  {
    id: 22,
    title: "Modern Living Room",
    imgSrc: "/Pic/22.jpg",
  },
  {
    id: 2,
    title: "Modern Living Room",
    imgSrc: "/Pic/2.jpg",
  },
  {
    id: 21,
    title: "Modern Living Room",
    imgSrc: "/Pic/21.jpg",
  },
  {
    id: 4,
    title: "Modern Living Room",
    imgSrc: "/Pic/4.jpg",
  },
  {
    id: 20,
    title: "Modern Living Room",
    imgSrc: "/Pic/20.jpg",
  },
  {
    id: 6,
    title: "Modern Living Room",
    imgSrc: "/Pic/6.jpg",
  },
  {
    id: 7,
    title: "Modern Living Room",
    imgSrc: "/Pic/7.jpg",
  },
  {
    id: 8,
    title: "Modern Living Room",
    imgSrc: "/Pic/8.jpg",
  },
  {
    id: 9,
    title: "Modern Living Room",
    imgSrc: "/Pic/9.jpg",
  },
  {
    id: 10,
    title: "Modern Living Room",
    imgSrc: "/Pic/10.jpg",
  },
  {
    id: 11,
    title: "Modern Living Room",
    imgSrc: "/Pic/11.jpg",
  },
  {
    id: 19,
    title: "Modern Living Room",
    imgSrc: "/Pic/19.jpg",
  },
  {
    id: 13,
    title: "Modern Living Room",
    imgSrc: "/Pic/13.jpg",
  },
  {
    id: 14,
    title: "Modern Living Room",
    imgSrc: "/Pic/14.jpg",
  },
  {
    id: 18,
    title: "Modern Living Room",
    imgSrc: "/Pic/18.jpg",
  },
  {
    id: 16,
    title: "Modern Living Room",
    imgSrc: "/Pic/16.jpg",
  },
  {
    id: 17,
    title: "Modern Living Room",
    imgSrc: "/Pic/17.jpg",
  },
  {
    id: 23,
    title: "Modern Living Room",
    imgSrc: "/Pic/23.jpg",
  },
  {
    id: 24,
    title: "Modern Living Room",
    imgSrc: "/Pic/24.jpg",
  },
];

export const SKILLS = [
  {
    name: "AutoCAD",
    icon: <SiAutocad className="text-red-600 w-6 h-6" />,
  },
  {
    name: "V-Ray",
    icon: <SiV className="text-blue-700 w-6 h-6" />,
  },
  {
    name: "3ds Max",
    icon: <BsBadge3dFill className="text-blue-400 w-6 h-6" />,
  },
  {
    name: "Corona Renderer",
    icon: <SiCoronarenderer className="text-orange-600 w-6 h-6" />,
  },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="text-blue-800 w-6 h-6" />,
  },
  {
    name: "Revit",
    icon: <SiAutodeskrevit className="text-blue-600 w-6 h-6" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2021 - 2024",
    role: "Online sales manager",
    company: " Archevani",
    description:
      "As an online sales manager, I managed customer inquiries, facilitated online transactions, and ensured a seamless shopping experience, focusing on customer satisfaction and operational efficiency.",
    techStack: [],
    imageUrl: "/Pic/13.jpg", // Image for this experience
  },
];

export const EDUCATION = [
  {
    id: 2,
    degree: "3D Interior Design",
    institution: "IT STEP Academy",
    description:
      "A deep dive into 3D interior design, covering AutoCAD, 3ds Max, V-Ray, Corona Renderer, Adobe Photoshop, 3D modeling, and Revit.",
    certificatePDF: "/Skillwill.pdf",
    certificateThumbnail: "/certificate.png",
  },
  {
    id: 1,
    degree: "3D MAX Visualization",
    institution: "Level Up",
    description:
      "An advanced program focusing on mastering Corona Renderer and 3ds Max, specializing in 3D visualizations.",
  },
  {
    id: 3,
    degree: "Dentistry (English)",
    institution: "The University of Georgia",
    description:
      "Studying Dentistry, focusing on clinical and theoretical aspects of the profession.",
  },
];
