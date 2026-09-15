import { Java, Git, Python, Javascript, CSS } from "./TechnologySVGList";

export const projects = [
   {
      name: "CU School of Medicine — Ophthalmology AI",
      url: "",
      roles: [
         { name: "Research Assistant", color: { color: "intern", opacity: "strong" } },
      ],
      period: "2024 – 2025",
      techStack: [
         { name: "Python", icon: <Python /> },
         { name: "Git", icon: <Git /> },
      ],
      img: "",
      description: `Intern and Data Science Research Assistant with the Artificial Medical Intelligence Division, Department of Ophthalmology, at the University of Colorado School of Medicine (Denver, CO).

Developed and refined a VideoMAE action-recognition model to predict surgical actions during core vitrectomy procedures (75% accuracy), and authored a research paper on the project in collaboration with 3 eye doctors and 5 data science researchers. Also designed a new department UI in Figma (there was no dedicated web designer), and contributed to predictive-modeling work forecasting age-related macular degeneration and other image-recognition tasks. Built primarily with Python, PyTorch, and OpenCV.`,
   },
   {
      name: "CBORD",
      url: "",
      roles: [{ name: "Intern", color: { color: "intern", opacity: "strong" } }],
      period: "2022 – 2024",
      techStack: [
         { name: "JavaScript", icon: <Javascript /> },
         { name: "CSS", icon: <CSS /> },
         { name: "Git", icon: <Git /> },
      ],
      img: "",
      description: `Developed front-end web applications and interfaces, working in Agile sprints to hit milestones on time. Contributed to back-end data processing using Oracle SQL to support system integration, and led front-end projects involving web design and webhooks, with an emphasis on team collaboration.`,
   },
   {
      name: "Competitive Pokémon Prediction Model",
      url: "",
      roles: [{ name: "Personal Project", color: { color: "data-scientist", opacity: "strong" } }],
      period: "2023 - 2023",
      techStack: [{ name: "Python", icon: <Python /> }],
      img: "",
      description: `Built a machine learning model to predict outcomes in competitive Pokémon battles, which contributed to reaching top-ranking status in the 2023 competitive metagame. A good excuse to apply predictive modeling to something purely for fun.`,
   },
   {
      name: "Personal Website — Real-Time Analytics",
      url: "",
      roles: [{ name: "Personal Project", color: { color: "data-scientist", opacity: "strong" } }],
      period: "2022 – 2023",
      techStack: [{ name: "JavaScript", icon: <Javascript /> }],
      img: "",
      description: `An earlier version of this very site: designed to analyze and display real-time visitor data using AWS S3 buckets for storage and retrieval.`,
   },
   {
      name: "Persona 5 Royal Mod Creation",
      url: "",
      roles: [{ name: "Personal Project", color: { color: "data-scientist", opacity: "strong" } }],
      period: "2022 – 2025",
      techStack: [],
      img: "",
      description: `Decompiled and extracted game data, analyzed the file formats, and hex-coded mod additions before recompiling the skill and move files for Persona 5 Royal. A deep dive into reverse engineering purely out of curiosity.`,
   },
   {
      name: "Nolan Robotics Team",
      url: "",
      roles: [
         { name: "Programming Lead", color: { color: "project-lead", opacity: "strong" } },
      ],
      period: "2016 – 2020",
      techStack: [{ name: "Java", icon: <Java /> }],
      img: "",
      description: `Programming Lead, Electronics Lead, and Robot Driver. Programmed and wired 13 robots from scratch, developing autonomous algorithms, and mentored other students in coding, circuit wiring, and heavy-machinery operation. Co-authored an award-winning Chairman's presentation promoting STEM initiatives.`,
   },
];
