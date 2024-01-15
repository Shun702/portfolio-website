import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TLAlogo from "@/public/TLAlogo.png"
import springframework from "@/public/spring.png"
import Stendhal from "@/public/Stendhal.jpeg"
import moonshot from "@/public/moonshotLandscape.png"
import stock from "@/public/stock.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Online Maths Tutor",
    location: "Manchester, UK",
    description:
      "I delivered comprehensive online tutoring part-time to a group of four A-level students from local colleges, fostering their understanding of computer science and mathematics under the Leveling Up Maths program.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-present",
  },
  {
    title: "Technical Officer & Volunteer",
    location: "Manchester, UK",
    description:
      "I managed office devices maintenance weekly and re-skinned society website while also worked as a volunteer at welfare society",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Online Data Analyst",
    location: "Manchester, UK",
    description:
      "I contributed to enhance global AI technology and digital experiences on monthly basis by handling diverse data types with high precision and accuracy while ensuring adherencee to ethical data handling practices.",
    icon: React.createElement(FaReact),
    date: "2022-2023",
  },
  {
    title: "Technical Support Intern",
    location: "Manchester, UK",
    description:
      "I delivered reasech and data support in the technology department by handling and reorganising large research data with high quality and accuracy.",
    icon: React.createElement(FaReact),
    date: "2021-2022",
  },
] as const;

export const projectsData = [
  {
    title: "Specification Clones (University Final Year Project)",
    description:
      "I have done applied research, data collection, cleansing, processing, and analysis, culminating in structured evaluations and conclusions about specification clones project on TLA+ formal language.",
    tags: ["Python", "testing", "analysis", "documentation", "phD-level research"],
    imageUrl: TLAlogo,
  },
  {
    title: "Eventlite: event management website",
    description:
      "I cooperated in a team of seven to design event-listing web application.",
    tags: ["Java", "HTML", "Thymeleaf", "Test-Driven Development", "Git", "Mapbox API", "Mastodon API", "REST API", "MVC", "Spring framework"],
    imageUrl: springframework,
  },
  {
    title: "Stendhal",
    description:
      "I cooperated in a team of seven to upgrade and develop features to Stendhal (an open source MORPG game).",
    tags: ["Java", "Test-Driven Development", "Git", "Jenkins", "CI/ CD Brown field development"],
    imageUrl: Stendhal,
  },
  {
    title: "Moonshot",
    description:
      "One of my personal projects on iOS applications. An educational applicatioin that displaying information about moon missions. More in Github",
    tags: ["Swift", "SwiftUI", "Accessibility", "iOS"],
    imageUrl: moonshot,
  },
  {
    title: "Stock Price Analysis & Prediction of Bitcoin",
    description:
      "Analyze and visualize BTC stock price, and predict using SARIMAX and Linear Regression. More similar projects in Github",
    tags: ["Python", "Pandas", "Numpy", "Matplot", "Sklearn", "Jupyter", "SARIMAX", "Lineaer Regression"],
    imageUrl: stock,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C programming",
  "C++ programming",
  "Haskell",
  "Swift",
  "SwiftUI",
  "Rust",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;