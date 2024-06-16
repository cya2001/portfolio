"use client";

import React from 'react';
import Image from 'next/image';
import classes from "./styles/intro.module.css";
import { motion } from 'framer-motion';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {

  const {ref} = useSectionInView('Home',0.5);
  const {setActiveSection,setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial = {{opacity:0,scale:0}}
            animate = {{opacity:1,scale:1}}
            transition={{
              type:"tween",
              duration:0.2,
            }}
          >
            <Image 
            src="/scizor.jpg"
            alt='cya'
            width="192"
            height="192"
            quality="95"
            priority={true}
            className={classes['intro-img']}
            />
            <motion.span className='absolute bottom-0 right-0 text-4xl'
              initial = {{opacity:0,scale:0}}
              animate = {{opacity:1,scale:1}}
              transition={{
                type:"spring",
                stiffness:125,
                delay:0.1,
                duration:0.7,
              }}>
              🤣
            </motion.span>          
          </motion.div>
      </div>


      </div>

      <motion.h1
        className={classes['intro-p']}
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div 
        className={classes['info-btn']}
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
          delay:0.1,
        }}
        >
        <Link href="#contact"
          className='group bg-gray-900 text-white px-7
          py-3 flex items-center gap-2 rounded-full
          outline-none 
          focus:scale-110 
          hover:scale-110 hover:bg-gray-950 
          active:scale-105
          transition'
          onClick={()=>{
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >Contact me here
        <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>

        <a className='group bg-white px-7
          py-3 flex items-center gap-2 rounded-full
          outline-none border border-black
          focus:scale-110 
          hover:scale-110 
          active:scale-105
          transition cursor-pointer'
          href='/CV.pdf' download
          >Download CV
          <HiDownload className='opacity-60 group-hover:translate-y-0.5 transition'/>

        </a>

        <a className='bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full
          border border-black
          focus:scale-[1.15]
          hover:scale-[1.15] hover:text-gray-950
          active:scale-105
          transition cursor-pointer'
          href='' target='_blank'>
          <BsLinkedin></BsLinkedin>
        </a>

        <a className='bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full text-[1.35rem]
          border border-black
          focus:scale-[1.15]
          hover:scale-[1.15] hover:text-gray-950
          active:scale-105
          transition cursor-pointer'
          href='https://github.com/cya2001' target='_blank'>
          <FaGithubSquare></FaGithubSquare>
        </a>

      </motion.div>
    </section>
  )
}
