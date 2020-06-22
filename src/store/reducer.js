import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes';

const defaultState = {
  inputValue:'Write Something',
  list:['早上8点上课', '下午1点上课', '晚上6点上课']
};

export default (state = defaultState,action)=>{
  // console.log('reducer')
  switch (action.type) {
    case CHANGE_INPUT:{
      // let newState = JSON.parse(JSON.stringify(state));
      let newTextState = {...state};
      newTextState.inputValue = action.value;
      return newTextState;
    }
    case ADD_ITEM:{
      console.log('reducer addItem');
      let newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    }
    case DELETE_ITEM:{
      let newState = {...state};
      newState.list.splice(action.index,1);
      return newState;
    }
    default:{
      return state;
    }
  }


}
