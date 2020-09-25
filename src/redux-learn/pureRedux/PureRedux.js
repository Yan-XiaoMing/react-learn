import React from 'react';
import {createStore, bindActionCreators, combineReducers} from 'redux';

const PLUS_ONE = "PLUS_ONE"
const MINUS_ONE = "MINUS_ONE"
const CUSTOM_COUNT = "CUSTOM_COUNT"

export function runPureRedux (){
  const initialState = { count: 0 };
  const counter = (state = initialState, action) => {
    switch (action.type){
      case PLUS_ONE:
        return { count: state.count + 1 }
      case MINUS_ONE:
        return { count: state.count - 1 }
      case CUSTOM_COUNT:
        return {
          count: state.count + action.payload.count
        }
      default:
        return state
    }
  }
  const testCombineReducer = (state = {}) => {return state}
  const store = createStore(combineReducers({counter, testCombineReducer}))

  function plusOne() {
    return { type: PLUS_ONE}
  }
  function minusOne(){
    return {type: MINUS_ONE}
  }
  function customCount(count){
    return {type: CUSTOM_COUNT, payload:{count}}
  }

  plusOne = bindActionCreators(plusOne,store.dispatch)
  store.subscribe(() => console.log(store.getState()))
  plusOne();
  store.dispatch(minusOne())
  store.dispatch(customCount(5))
}
