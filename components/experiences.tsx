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
                    className={`${index % 2 === 0 ? classes['exp-card-left'] : classes['exp-card-right']}`}
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

    // <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
    //   <SectionHeading>My experience</SectionHeading>
    //   <VerticalTimeline lineColor="">
    //     {experiencesData.map((item,index)=>(
    //       <div key={index}>
    //           <h3 className="font-semibold capitalize">{item.title}</h3>
    //           <p className="font-normal !mt-0">{item.location}</p>
    //           <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
    //             {item.description}
    //           </p>
    //       </div>
    //     ))}
    //     {experiencesData.map((item, index) => (
    //       <React.Fragment key={index}>
    //         <VerticalTimelineElement
    //           contentStyle={{
    //             background:"rgba(255, 255, 255, 0.05)",
    //             boxShadow: "none",
    //             border: "1px solid rgba(0, 0, 0, 0.05)",
    //             textAlign: "left",
    //             padding: "1.3rem 2rem",
    //           }}
    //           contentArrowStyle={{
    //             borderRight:"0.4rem solid rgba(255, 255, 255, 0.5)",
    //           }}
    //           date={item.date}
    //           icon={item.icon}
    //           iconStyle={{
    //             background: "rgba(255, 255, 255, 0.15)",
    //             fontSize: "1.5rem",
    //           }}
    //         >
    //           <h3 className="font-semibold capitalize">{item.title}</h3>
    //           <p className="font-normal !mt-0">{item.location}</p>
    //           <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
    //             {item.description}
    //           </p>
    //         </VerticalTimelineElement>
    //       </React.Fragment>
    //     ))}
    //   </VerticalTimeline>
    // </section>
  );
}
