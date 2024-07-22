'use client';

import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';;
import {projectsData} from '@/lib/data';
import Project from './project';

export default function Projects() {
  const {ref} = useSectionInView('Projects',0.3)

  return (
    
    <section id='projects' ref={ref} style={{marginTop:'2rem'}}>
      <SectionHeading>My project</SectionHeading>
      <div className="flex justify-center items-center">
        <p style={{ fontStyle: 'italic', color: '#808080' }}>
          Please refresh if the project carousel wasn't shown
        </p>
      </div>
      <br/>
      <div>
        {
          projectsData.map((project,index)=>(
            <React.Fragment key={index}>
              <Project {...project}/>
              <br/>
            </React.Fragment>
          ))
        }
      </div>      
    </section>
  )
}
