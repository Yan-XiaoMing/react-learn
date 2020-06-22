import React, {Component} from 'react';
import {Button} from 'antd';

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.')
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <a href='#' onClick={handleClick}>Click me</a>
      </div>
    );
  }
}

export default Clock;


