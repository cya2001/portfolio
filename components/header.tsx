"use client";

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {links} from "@/lib/data";
import Link from "next/link";
import classes from "./styles/header.module.css"
import { ActiveSectionContext,useActiveSectionContext } from "@/context/active-section-context";



export default function Header(){

  const {activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick} =  useActiveSectionContext();
// const [activeSection,setActiveSeaction] = useState('Home');

const handleLinkClick = (linkname:any)=>{
  setActiveSection(linkname);
  setTimeOfLastClick(Date.now());
}

useEffect(() => {
  console.log(activeSection);
}, [activeSection]);

  return(
    <header className={classes.header}>
      <motion.div className={classes['nav-wrapper']}
        initial = {{y:-100, x:"-50%",opacity:0}}
        animate = {{y:0,x:"-50%",opacity:1}}
      >
      </motion.div>
      <nav className={classes['nav-text']}>
        <ul className={classes['nav-list']}>
          {links.map((link,i)=>(
            <motion.li className="h-3/4 flex items-center justify-center relative"
             key={link.hash}
             initial = {{y:-100,opacity:0}}
             animate = {{y:0,opacity:1}}
             >
              <Link className={`${classes['nav-link']} 
              ${activeSection==link.name?classes['active']:null}
              transition
              `}
              href={link.hash}
              //当链接的 href 属性值以 # 开头时,浏览器会自动滚动到页面上对应 id 的元素位置。
              onClick={()=>handleLinkClick(link.name)}
              >
              {link.name}

              {link.name == activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  >
                  </motion.span>
                )}
                
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

    </header>
  )
}