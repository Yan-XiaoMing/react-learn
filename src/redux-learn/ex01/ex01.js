import React, {Component} from 'react';
import Counter from "./components/Counter";
import {createStore} from "redux";
import reducer from "./reducer/index";
import {DECREMENT, INCREMENT} from "./reducer/type";

const store = createStore(reducer);

class Ex01 extends Component {

  constructor(props) {
    super(props);
    store.subscribe(this.storeChange);
  }


  storeChange = ()=>{
    store.getState();
  }

  render() {
    return (
        <Counter value={store.getState()} onIncrement={()=>store.dispatch({type:INCREMENT})} onDecrement={()=>store.dispatch({type:DECREMENT})}/>
    );
  }
}

export default Ex01;