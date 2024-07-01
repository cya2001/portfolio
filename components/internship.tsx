'use client';
import React from 'react'
import SectionHeading from './section-heading'
import { Avatar, List, Space,Card ,Flex} from 'antd';
import { useSectionInView } from '@/lib/hooks';
import { intershipData } from '@/lib/data';
import classes from './styles/internship.module.css';
import Image from 'next/image';

export default function Intership() {
  const {ref} = useSectionInView('Internship',0.2);


  return (
    <section id="intership" ref={ref} style={{marginTop:'2rem'}}>
      <SectionHeading>My internship</SectionHeading>
      {
        intershipData.map((item,index)=>(
          <Card className={classes['card-wrapper']} key={index}>

            <Flex justify='space-between' >
              <div className={classes['intern-description']}>
                <p className={classes['description-title']}>
                  <a href={item.link}>{item.title}</a>
                </p>
                <p className='underline deecoration-2'>{item.position}</p>
                <p style={{fontStyle:'italic',color:'rgba(0, 0, 0, 0.45)' }}>{item.location}</p>
                <p style={{color:'rgba(0, 0, 0, 0.45)' }}>{item.duration}</p>
                {
                  item.description.map((des,idx)=>(
                    <p key={idx}>{des}</p>
                  ))
                }                
              </div>
              <a href={item.link} className={classes['intern-img']}>
              <Image 
              src={item.imgUrl}
              alt={item.title}>
              
              </Image></a>
            </Flex>


          </Card>              
        ))
    
      }

    </section>
  )
}
