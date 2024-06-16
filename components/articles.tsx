"use client";
import React,{useState} from 'react'
import {Card,Space,Modal} from 'antd';
import classes from './styles/articles.module.css';
import { articleData } from '@/lib/articles';
import { useSectionInView } from '@/lib/hooks';

export default function Articles() {

  const {ref} = useSectionInView('Articles',0.6);
  const [open,setOpen] = useState(false);
  const [selectArticle,setSelectArticle] = useState(Object);

  const handleCancel = () =>{
    setOpen(false);
  };
  const hanldeClickCard = (article:object)=>{
    setSelectArticle(article);
    setOpen(true);
  };

  return (
    <div className={classes['articles-wrapper']}
    id='articles'
    ref={ref}
    >
      <Space direction="vertical" size="middle" className={classes['articles-space']}>
        {articleData.map((article, index) => (
            <Card key={index} className={classes.card}
              onClick={()=>hanldeClickCard(article)}
            >
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </Card>
        ))}
      </Space>
      {
        selectArticle && (
          <Modal
            className={classes['article-modal']}
            title={<div className={classes['article-modal-title']}>{selectArticle.title}</div>}
            open={open}
            onCancel={handleCancel}
            footer={null}
          >
            <div className={classes['article-modal-content']}>
              {selectArticle.content}
            </div>
          </Modal>
        )
      }
    </div>

  )
}
