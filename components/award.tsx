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
    <section id='award' ref={ref} style={{marginTop:20, width:"80rem"}}>
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
                  width="170"
                  height="170"
                  quality="100"
                />
              </Flex>
            </Card.Grid>
          ))
        }
      </Card>
    </section>
  )
}
