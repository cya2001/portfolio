import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import homeImg from '@/public/home.png';
import home2Img from '@/public/homebanner.png';
import searchImg from '@/public/search.png';
import comapImg from '@/public/comap.svg';
import apmcmImg from '@/public/apmcm.png';
import hzauImg from '@/public/hzau.svg.png';
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
    name: "Intetship",
    hash: "#intership"
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
    title:"HZAU",
    location:'武汉',
    major:'计算机科学与技术',
    duration:'2019.9-2023.8',
    gpa:'3.79/4.00',
    courses:'Data Structure, Computer Network, Deep Learning'
  },
  {
    title:"HKU",
    location:'Hong Kong',
    major:'computer science',
    duration:'2023.9-2025.7',
    gpa:'NA',
    courses:'Data Mining, Cyber Security'
  },
  
] as const;

export const projectBanner = [
  {
    title: "home",
    url: homeImg,   
  },
  {
    title: "home2",
    url:home2Img,   
  },
  {
    title: "search",
    url: searchImg,   
  }

] as const;
// First prize for excellent academic performance 10/2022
//  Honorable Mention in 2022 Mathematical Contest in Modeling 05/2022
// ⚫ Excellent Prize in National Student New Media Competition 04/2022
// ⚫ Second Prize in 2021 Asia and Pacific Mathematical Contest in Modeling 01/2022
// ⚫ National Third Prize in 2021 Chinese University Big Data Challenge 01/2022
// ⚫ Merit student of Huazhong Agricultural University 09/2021
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
    url: hzauImg
  },
  {
    title: "Merit student of Huazhong Agricultural University",
    date: "09/2021",
    url: hzauImg
  }

] as const;


export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
