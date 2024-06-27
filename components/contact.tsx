'use client';
import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import {Form,Input,Button,notification} from 'antd';
import {sendEmail} from '@/actions/sendEmail';


const {TextArea} = Input;

export default function Contact() {
  const {ref} = useSectionInView('Contact');
  const [form] = Form.useForm();
  const [loading,setLoading] =useState(false);
  const [api, contextHolder] = notification.useNotification();


  const notify = (message:string,description:string) =>{
    if(message=='SUCCESS'){
      api.info({
        message:'SUCESS',
        description:description,
        placement:'top',
        duration:4.5,
      })
    }else{
      api.error({
        icon:'x',
        message:'FAIL',
        description:description,
        placement:'top',
        duration:4.5
      })
    }
  }

  const handleSumit = async(value:any) => {
    try {
      const {email,message} = value;
      const mailSubject = 'New Message from your Website';
      const mailBody = `
        Email:${email},
        Message:${message}
      `;
      setLoading(true);
      await sendEmail({mailSubject,mailBody});
      form.resetFields();
      notify('SUCCESS','Your message has been sent!')

    } catch (error) {
      console.error('send error',error)
    }finally{
      setLoading(false);
    }
  }
  
  return (
    <div style={{marginTop:100}} ref = {ref} id='contact'>
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="cyayu@connect.hku.hk">
          cyayu@connect.hku.hk
        </a>{" "}
        or through this form.
      </p>
      <br />
      <Form
        form={form}
        onFinish={handleSumit}
      >
        <Form.Item
          name="email"
          rules={[
            {required:true,message:'Please input your email'},
            {
              pattern: /^\w+([-+.'][\w]+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
              // /^([A-Za-z0-9]+[-_.]?)+@[A-Za-z0-9]+\.[a-z]+$/
              message: 'please input right email!'
            }
          ]}
        >
          <Input placeholder='Please input your email here'
          />          
        </Form.Item>

        <Form.Item
          name="message"
          rules={[
            {required:true,message:'Please input your message'}
          ]}
        >
          <TextArea 
          placeholder='Please input your message here' 
          rows={10}
          />               
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {loading? 'Sending...' : 'Submit'}
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </div>
  )
}
