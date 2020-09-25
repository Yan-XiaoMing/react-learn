import React, {Component} from 'react';
import {Button} from 'antd';

class ReactRedux extends Component {
  render() {
    const {count,plusOne,minusOne} = this.props;
    return (
      <div>
        <Button onClick={minusOne}>-</Button>
        <span>{count}</span>
        <Button onClick={plusOne}>+</Button>
      </div>
    );
  }
}

export default ReactRedux;
