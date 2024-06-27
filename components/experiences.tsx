"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from 'next/image';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {Timeline, Card} from 'antd';
import classes from './styles/experiences.module.css';
import hkuImg from '@/public/hku.png';
import hzauImg from '@/public/hzau.png';

export default function Experience() {
  const { ref } = useSectionInView("Experience",0.4);
  // const { theme } = useTheme();

  return (
    <section id="experience" ref={ref}>
      <SectionHeading>My experience</SectionHeading>
        <Timeline
          mode="alternate"
          items={
            experiencesData.map((item,index)=>(
              {
                children:(
                  <div key={index} className={classes.cover}>
                    <Card  bordered={false} hoverable={true} 
                      cover={
                        <div>
                          <Image
                            alt="item.title"
                            src={item.title=='The University of Hong Kong'?hkuImg:hzauImg}
                            style={{ width: '11.25rem', height: 'auto', marginLeft:'3.5rem' }}
                            quality={100}
                            priority={false}
                          />                          
                        </div>
                      }
                      style={{right:`${index%2==0?'':'10rem'}`}}
                      >
                      <p className="italic font-bold text-lg">{item.title}</p>
                      <div className="leading-loose">
                        <p>{item.location}</p>
                        <p className="underline  decoration-2">{item.major}</p>
                        <p className="tracking-wide">{item.duration}</p>
                        <p>{item.gpa}</p>
                        <p>{item.courses}</p>
                      </div>
                    </Card>
                  </div>

                ),

              }
            ))
        }
        />
    </section>
  );
}
