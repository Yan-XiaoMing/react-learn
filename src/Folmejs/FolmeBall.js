import React from 'react';
import {to} from '@folmejs/core'
import {Button} from 'antd'
import './style.css'


class FolmeBall extends React.Component {

  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event)=> {

    let ball = event.target.querySelector('.folme-ball');

    to( ball,{
      x: event.clientX-35,
      y: event.clientY-235,
    });
  }

  chaneWidth = ()=>{
    to('.folme-ball-target',{
      width:Math.random()*400+100
    })
  }

  componentDidMount() {
    this.setState({func:this.handleMouseMove})
  }

  render() {
    return (
      <div className='folme-container' onMouseMove={this.state.func}>
        {/*<p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>*/}
        <span className='folme-ball'/>
        <div className='folme-ball-target'/>
        <Button className='folme-ball-target-btn' type='primary' onClick={this.chaneWidth}>重置长度</Button>

      </div>
    );
  }

}

export default FolmeBall;