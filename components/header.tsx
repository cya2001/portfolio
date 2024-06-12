"use client";

import React from "react";
import { motion } from "framer-motion";
import {links} from "@/lib/data";
import Link from "next/link";
import classes from "./styles/header.module.css"

export default function Header(){
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
            <motion.li className="h-3/4 flex items-center justify-center"
             key={link.hash}
             initial = {{y:-100,opacity:0}}
             animate = {{y:0,opacity:1}}
             >
              <Link className="flex w-full items-center
              justify-center px-3 py-3 hover:text-gray-950 transition"
              href={link.hash}>
              {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

    </header>
  )
}