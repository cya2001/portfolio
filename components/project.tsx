'use client';


import React from 'react'
import {projectsData} from '@/lib/data';
import {Carousel,Card, Tag, Flex } from 'antd';
import SectionHeading from './section-heading';
import classses from './styles/projects.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {
  GithubOutlined,
} from '@ant-design/icons';

type ProjectProps = typeof projectsData[number];

export default function Project({
  title,
  description,
  techstack,
  showcase,
}:ProjectProps) {


  return (
    <section className={classses['project-wrapper']}>
    <Carousel arrows dotPosition="left" infinite={false}
      autoplay={true}
      className={classses['carousel-wrapper']}
    >
      {
        showcase.map((item,index)=>(
          <Image key={index}
            src={item}
            alt='cya'
            width="2500"
            height="2500"
            quality="100"
            priority={true}
          />
        ))
      }

    </Carousel>
    
    <Card bordered = {false} className={classses['describe-card']}>
      <p>{description}</p>
      <br/>
      <Flex gap={5}wrap>
        {
          techstack.map((item,index)=>(
            <Tag key={index}>{item}</Tag>
          ))
        }
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
