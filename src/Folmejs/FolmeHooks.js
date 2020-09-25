import React,{useEffect,useState} from 'react';
import Folme, {FolmeEase} from '@mi/folme'
import './style.css'

function FolmeHooks(props) {

  useEffect(()=>{
    const folme = new Folme(document.getElementById('container'))
    folme.to({
      translateX: 200,
      background: "black"
    },{
        // 通用配置
        delay: 1,
        initialVelocity:1,
        ease: FolmeEase.spring(0.9,3),
      }
    );
  },[]);

  return (
    <div className='folme-test-wrapper'>
      <div className='folme-test-hide'/>
      <div id='container' className='folme-test-container'>
      </div>
    </div>
  );
}

export default FolmeHooks;
