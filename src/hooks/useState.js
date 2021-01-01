import {render} from "react-dom";

let hookStates = []

let hookIndex = 0

function useState(initialState){
  hookStates[hookIndex] = hookStates[hookIndex] || initialState
  let currentIndex = hookIndex
  function setState(newState){
    //判断闭包维护函数调用位置
    if(typeof  newState  === "function"){
      //重新复制给newState
      newState = newState(hookStates[hookIndex])
    }
    //更新state
    hookStates[currentIndex] = newState

    // render();
  }
  return [hookStates[hookIndex++],setState()]
}
