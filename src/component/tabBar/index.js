import React, {Component} from 'react';
import './style.css'

class TabBar extends Component {

  constructor(props) {
    super(props);
    this.block = React.createRef();
  }

  translateBlock = (index)=>{
    let style = this.block.current.style;
    console.log(style)
    if(index===1){
      style.transform = 'translateX(0%)'
    }
    else{
      style.transform = 'translateX(100%)'
    }
  }

  render() {
    return (
      <div className='tab-bar-wrapper'>
        <div className='tab-bar-container'>
          <div className='select-block' ref={this.block}/>
          <div className='tab-bar-item' onClick={()=>this.translateBlock(1)}>
            <span>可使用</span>
          </div>
          <div className='tab-bar-item' onClick={()=>this.translateBlock(2)}>
            <span>已过期</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TabBar;