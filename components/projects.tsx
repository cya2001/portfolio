'use client';

import React from 'react'
import {Carousel,Card, Tag, Flex } from 'antd';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import classses from './styles/projects.module.css';
import SectionHeading from './section-heading';
import Link from 'next/link';
import {projectBanner} from '@/lib/data';
import {
  GithubOutlined,
} from '@ant-design/icons';

export default function Projects() {
  const {ref} = useSectionInView('Projects')

  return (
    
    <section id='projects' ref={ref} className={classses['project-wrapper']}>
        <SectionHeading>My project</SectionHeading>
        <Carousel arrows dotPosition="left" infinite={false}
          autoplay={true}
          className={classses['carousel-wrapper']}
        >
          {
            projectBanner.map((item,index)=>(
              <Image key={index}
                src={item.url}
                alt={item.title}
                width="2500"
                height="2500"
                quality="100"
              />
            ))
          }

        </Carousel>
        
        <Card bordered = {false} className={classses['describe-card']}>
          <p>
          This project is to provide users with a convenient card search and display function, enabling them to search by Pokémon name and view related cards along with associated information.
          </p>
          <br/>
          <Flex gap={5}wrap>
            <Tag>Vue3</Tag>
            <Tag>Javascript</Tag>
            <Tag>Pinia</Tag>
            <Tag>ElementUI</Tag>
          </Flex>
          <Link className={classses['jump-tag']}
            href="https://github.com/cya2001/PTCG-project" target='_blank'
          >
            <Tag icon={<GithubOutlined />} >
              Github
            </Tag>          
          </Link>

          
        </Card>
      
    </section>
  )
}
