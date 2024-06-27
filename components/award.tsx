'use client';

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import {Card, Flex} from 'antd';
import Image from 'next/image';
import SectionHeading from './section-heading';
import {awards} from '@/lib/data';
import classes from './styles/award.module.css';


export default function Award() {
  const {ref} = useSectionInView('Awards')

  return (
    <section id='awards' ref={ref} style={{marginTop:100, width:"80rem"}}>
      <SectionHeading>Awards</SectionHeading>
       <Card >
        {
          awards.map((item,index)=>(
            <Card.Grid key={index}>
              <Flex justify='center' align='center'>
                <div className={classes['award-describe']}>
                  <h3 className={classes.title}>{item.title}</h3>
                  <p className={classes.date}>{item.date}</p>            
                </div>  
                <Image
                  src={item.url}
                  alt={item.title}
                  quality="100"
                  style={{ width: '11.25rem', height: 'auto' }}
                  priority={false} 
                />
              </Flex>
            </Card.Grid>
          ))
        }
      </Card>
    </section>
  )
}
