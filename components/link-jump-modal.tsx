import { Button, Modal } from 'antd'
import React, { FC, useState } from 'react'


type LinkJumpModalProps = {
  link:string,
  children:React.ReactNode,
}

const LinkJumpModal:FC<LinkJumpModalProps> = ({
  link,
  children,
})=>{
  const [open,setOpen] = useState(false);

  const handleLinkClick =(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
    event.preventDefault();
    setOpen(true);
  };

  const handleOK = ()=>{
    window.open(link,'_blank');
    setOpen(false);
  }
  const onCancel = ()=>{
    setOpen(false);
  };
  const handleClose = ()=>{
    setOpen(false);
  };
  return (
    <>
      <a href='#' onClick={handleLinkClick}>
        {children}
      </a>
      <Modal
       open={open}
       onOk={handleOK}
       onCancel={handleClose}
       onClose={handleClose}
       centered={true}
      >
        <p className='text-lg'>A new page is about to open</p>
        <p style={{ color: 'blue' }}>{link}</p>
      </Modal>
    </>
  )
}

export default LinkJumpModal