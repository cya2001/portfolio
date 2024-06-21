"use client";

import React from "react";
import SectionHeading from "./section-heading";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {Timeline, Card} from 'antd';
import classes from './styles/experiences.module.css';


export default function Experience() {
  const { ref } = useSectionInView("Experience");
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
                  <div key={index} >
                    <Card title={item.title} bordered={false} hoverable={true} 
                    className={`${index % 2 === 0 ? classes['exp-card-left'] : classes['exp-card-right']}`}
                      >
                      <p>{item.location}</p>
                      <p>{item.major}</p>
                      <p>{item.duration}</p>
                      <p>{item.gpa}</p>
                      <p>{item.courses}</p>
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
