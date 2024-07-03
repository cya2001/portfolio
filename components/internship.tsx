'use client';
import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { Avatar, List, Space,Card ,Flex,Modal} from 'antd';
import { useSectionInView } from '@/lib/hooks';
import { intershipData } from '@/lib/data';
import classes from './styles/internship.module.css';
import Image from 'next/image';
import LinkJumpModal from './link-jump-modal';

export default function Intership() {
  const {ref} = useSectionInView('Internship',0.2);


  return (
    <section id="internship" ref={ref} style={{marginTop:'2rem'}}>
      <SectionHeading>My internship</SectionHeading>
      {
        intershipData.map((item,index)=>(
          <Card className={classes['card-wrapper']} key={index}>

            <Flex justify='space-between' >
              <div className={classes['intern-description']}>
                <p className={classes['description-title']}>
                  <LinkJumpModal link={item.link}>
                    {item.title}
                  </LinkJumpModal>
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
              <LinkJumpModal link={item.link}>
                <Image 
                  className={classes['intern-img']}
                  src={item.imgUrl}
                  alt={item.title}
                  priority={true}
                >    
                </Image>                                
              </LinkJumpModal>
            </Flex>
          </Card>              
        ))
    
      }

    </section>
  )
}
