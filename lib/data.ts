import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ptcgHomeImg from '@/public/ptcg-home.png';
import ptcgDetailImg from '@/public/ptcg-detail.png';
import ptcgSearchImg from '@/public/ptcg-search.png';
import pluginPopup from '@/public/plugin-popup.png';
import pluginSetting from '@/public/plugin-setting.png';
import comapImg from '@/public/comap.svg';
import apmcmImg from '@/public/apmcm.png';
import hzauImg from '@/public/hzau.png';
import bdtImg from '@/public/bdt.png';
import bullbImg from '@/public/bull-b.png';
// import moduleName from '@/public/';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Internship",
    hash: "#internship"
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Awards",
    hash: "#awards",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title:"华中农业大学",
    location:'武汉',
    major:'计算机科学与技术',
    duration:'2019.9 ~ 2023.8',
    gpa:'3.79 / 4.00',
    courses:'数据结构，计算机网络，深度学习'
  },
  {
    title:"The University of Hong Kong",
    location:'Hong Kong',
    major:'Computer Science',
    duration:'2023.9 ~ 2025.7',
    gpa:'N/A',
    courses:'Data Mining, Cyber Security'
  },
  
] as const;

export const intershipData = [
  {
    title:'BULL.B TECHNOLOGY LIMITED',
    location:'Smart Space 3F, Level 9, Cyberport 3 Core F, 100 Cyberport Road, Cyberport, HK',
    position:'Front-end Developer',
    duration:'3rd June 2024 - 30th August 2024',
    description:[
      '- Scrolling list loading in Game Rooms interface and integrating API for Bot management and scheduling in the interface.',
      '- Timeline visualisation in Active Timeslot Management, supporting complex cases where multiple timelines overlap.',
      '- Drag-and-drop setup interaction in Auto Assigner Management for jumping between different layouts.'
    ],
    link:'https://www.bull-b.com/',
    imgUrl:bullbImg,
  }

] as const;

export const awards = [
  {
    title: "Honorable Mention in 2022 Mathematical Contest in Modeling",
    date: "05/2022",
    url: comapImg
  },
  {
    title: "First prize for excellent academic performance",
    date: "10/2022",
    url: hzauImg
  },
  {
    title: "Excellent Prize in National Student New Media Competition",
    date: "04/2022",
    url: hzauImg
  },  
  {
    title: "Second Prize in 2021 Asia and Pacific Mathematical Contest in Modeling",
    date: "01/2022",
    url: apmcmImg
  },
  {
    title: "National Third Prize in 2021 Chinese University Big Data Challenge",
    date: "01/2022",
    url: bdtImg
  },
  {
    title: "Merit student of Huazhong Agricultural University",
    date: "09/2021",
    url: hzauImg
  }

] as const;


export const projectsData = [
  {
    title: "Muti-Platform Info Integrating Browser Plug-in",
    description: "The plugin is able to retrieve posts from various social media platforms in real time. It will integrate and present the information in a time-line format. This makes it easier for users to follow updates and grab valuable information.",
    techstack: ['React','Javascript','Antd'],
    showcase:[pluginPopup,pluginSetting],    
  },
  {
    title: "PTCG Card Search Showcase Website",
    description: "This project is to provide users with a convenient card search and display function, enabling them to search by Pokémon name and view related cards along with associated information.",
    techstack: ['Vue3','Javascript','Pinia','ElementUI'],
    showcase:[ptcgHomeImg,ptcgSearchImg,ptcgDetailImg],

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
