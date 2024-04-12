import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TLAlogo from "@/public/TLAlogo.png"
import springframework from "@/public/spring.png"
import Stendhal from "@/public/Stendhal.jpeg"
import moonshot from "@/public/moonshotLandscape.png"
import stock from "@/public/stock.jpg"
import music from "@/public/music-app.png"
import recipe from "@/public/recipe.png"
import othello from "@/public/othello.jpg"
import car from "@/public/car.jpeg"
import faceRecognition from "@/public/face-recognition.jpg"
import horizon from "@/public/horizon.jpeg"
import solar from "@/public/solar-system.png"
import article from "@/public/article-classification.jpeg"

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
    date: "2023-2024",
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
    title: "TLA+ Specification Clones (University Final Year Project)",
    description:
      "I have done applied research, data collection, cleansing, processing, and analysis, culminating in structured evaluations and conclusions about specification clones project on TLA+ formal language.",
    tags: ["Python","data gathering", "data manipulation", "data analysis", "data visulaisation", "documentation", "phD-level research"],
    imageUrl: TLAlogo,
  },
  {
    title: "'M' Music App (Investment Analysis for a Business Project)",
    description:
      "I have developed and executed a 2,500-word individual report focused on investment analysis for a business project, applying investment indicators and cash flow modelling techniques to assess project viability.",
    tags: ["Microsoft Excel", "Microsoft Word", "investment analysis", "financial analysis", "investment indicators", "business report writing"],
    imageUrl: music,
  },
  {
    title: "Eventlite: event management website",
    description:
      "I cooperated in a team of seven to design event-listing web application.",
    tags: ["Java", "HTML", "Thymeleaf", "Test-Driven Development", "Git", "Mapbox API", "Mastodon API", "REST API", "MVC", "Spring framework"],
    imageUrl: springframework,
  },
  {
    title: "Face recognition and Completion (Machine Learning Coursework)",
    description:
      "I used machine learning to complete faces from incomplete datasets, employing regularized least squares and gradient descent for model creation. Results were visualized using confusion matrices, and model training utilized techniques like one-hot encoding and k-fold cross-validation.",
    tags: ["Machine Learning", "Python", "Numpy", "Matplot", "Jupyter"],
    imageUrl: faceRecognition,
  },
  {
    title: "Horizon Detection ",
    description:
      "In my work, I analyzed images using C++ and OpenCV to determine the location of horizons within them. This involved employing techniques such as Canny Edge detection and various filtering methods to precisely visualize the horizon lines within the images.",
    tags: ["C++", "OpenCV", "Canny Edge detection"],
    imageUrl: horizon,
  },
  {
    title: "News Article Classification ",
    description:
      "I applied the K-nearest neighbors algorithm using Euclidean distance and Cosine similarity to classify new articles, determining the optimal K value through hyperparameter selection. Surprisingly, Cosine similarity yielded better results than Euclidean distance for the specific data. To handle data sparsity, I utilized Scipy's sparse matrices, enhancing computation efficiency for thousands of matrix multiplications.",
    tags: ["Python", "Jupyter", "Machine Learning"],
    imageUrl: article,
  },
  {
    title: "Solar System Visualisation",
    description:
      "I developed an interactive visualisation of the solar system using OpenCV, C++, HTML & Javascript",
    tags: ["OpenCV", "C++", "HTML", "Javascript"],
    imageUrl: solar,
  },
  {
    title: "SLAM",
    description:
      "I Implemented three feature matching algorithms including Euclidian Distance, Nearest Neighbour and NNDR using python and OpenCV library to implement Simultaneous Localisation & Mapping on a video of car moving through a street",
    tags: ["OpenCV", "C++"],
    imageUrl: car,
  },
  {
    title: "Stendhal",
    description:
      "I collaborated with a team of seven to enhance and develop features for Stendhal, an open-source MORPG game. Our project followed Test-Driven Development practices, integrating Jenkins and CI/CD Brownfield development methods, while Git was used for version control. I actively edited unit tests, totaling over 2100, with JUnit. Additionally, I organized standup meetings to synchronize efforts and coordinate changes, following an issue-driven work methodology.",
    tags: ["Java", "Test-Driven Development", "Git", "Jenkins", "CI/ CD Brown field development"],
    imageUrl: Stendhal,
  },
  {
    title: "Othello AI",
    description:
      "Devised and implemented algorithm for AI in Python language in Othello game to beat players using alpha-beta pruning",
    tags: ["Python", "AI"],
    imageUrl: othello,
  },
  {
    title: "E-Menu (First Year Team Project)",
    description:
      "As part of a seven-person team, I collaborated in designing a recipe web application. Serving as a co-leader, I actively contributed to both the front-end and back-end development processes. Throughout the project, we meticulously tracked and managed version control using Git to ensure seamless collaboration and maintain a coherent development workflow.",
    tags: ["Python", "MySQL", "HTML", "CSS"],
    imageUrl: recipe,
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