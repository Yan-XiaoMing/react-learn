import React, {Component} from 'react';
import {createStore} from 'redux'
import {counter} from './redux/reducers';
import {DECREMENT, INCREMENT} from './redux/actionTypes';


class Index extends Component {

  constructor(props) {
    super(props);

  }

  increment = () =>{
    const number = this.select.value*1;
    this.props.store.dispatch({type:INCREMENT,data:number})
  }

  decrement = () => {
    const number = this.select.value*1;
    this.props.store.dispatch({type:DECREMENT,data:number})
  }

  incrementIfOdd = () => {
    const number = this.select.value * 1;
    const count = this.props.store.getState()
    if(count%2 === 1){
      this.props.store.dispatch({type:INCREMENT,data:number})
    }
  }

  incrementAsync = () => {
    const number = this.select.value *1;
    setTimeout(()=>{
      this.props.store.dispatch({type:INCREMENT,data:number})
    },1000)
  }

  render() {
    const count = this.props.store.getState()
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}>incrementIfOdd</button>
          <button onClick={this.incrementAsync}>incrementAsync</button>
        </div>
      </div>
    );
  }
}

export default Index;
