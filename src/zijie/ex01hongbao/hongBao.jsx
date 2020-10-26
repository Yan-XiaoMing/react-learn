import React, {useRef, useState} from 'react';
import './style.css'

const HongBao = () => {
  const [show,useShow] = useState(1)
  const [isOpen,useIsOpen] = useState(0)
  const openButton = useRef()
  const openWrapper = useRef()

  const HandleSentShow = (num) => {
    useShow(num)
  }
  const HandleOpenHooks = (num) =>{
    useIsOpen(num)
  }
  const HandleOpen = ()=>{
    openButton.current.className = 'open-btn opening-btn'
    setTimeout(()=>{
      openButton.current.className = 'opened-btn'
      openWrapper.current.className = 'open-wrapper opening-wrapper'
      HandleOpenHooks(2)
      setTimeout(()=>{
        HandleOpenHooks(1)
      },1500)
    },2000)
  }
  return (
    <div className='red-container'>
      <h1>红包模拟器</h1>
      <div className='container'>
        {show === 1 && (
          <div className='red-item-wrapper'>
            <div className='open-wrapper' ref={openWrapper}>
              <div className='open-btn' ref={openButton} onClick={HandleOpen}>拆红包</div>
            </div>
            <div className='close-red' onClick={()=>HandleSentShow(0)}>
              x
            </div>
            <div className='red-header'>
              <img src='http://s3a.pstatp.com/cg_growth/resource/boilerplate/images/redpacket/avatar.png' alt='头像'/>
            </div>
            {isOpen === 0 && (
              <div className='user-wrapper'>
                <div className='username'>小铭</div>
                <div className='userto'>给您发了一个红包</div>
                <div className='userhappy'>恭喜发财 大吉大利</div>
              </div>
            )}
            {isOpen === 1 && (
              <div className='user-wrapper'>
                <div className='username'>3.01</div>
                <div className='userhappy'>红包领取榜</div>
                <div className='user-list'>
                  <div><span>用户1: 2.01</span></div>
                  <div><span>用户2: 3.01</span></div>
                  <div><span>用户3: 6.01</span><span>手气最佳</span></div>
                  <div><span>用户4: 1.01</span></div>
                  <div><span>用户5: 2.01</span></div>
                  <div><span>用户6: 5.01</span></div>
                </div>
              </div>
            )}
          </div>
        )}
        <form>
          <div className='form-item'>
            <span>红包个数:</span><input className='red-num'/><span>个</span>
          </div>
          <div className='form-item'>
            <span className='special-span'>总金额:</span><input className='money-input'/><span>元</span>
          </div>
          <div className='form-btn-wrapper'>
            <button className='form-btn-item' onClick={()=>HandleSentShow(1)}>发红包</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HongBao;
