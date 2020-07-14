import {createStore} from 'redux';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const reducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case INCREASE:
      return {count: state + 1};
    case DECREASE:
      return {count: state - 1};
    default :
      return state;
  }
}

const action = {
  increase:()=>({type:INCREASE}),
  decrease:()=>({type:DECREASE})
};

const store = createStore(reducer);

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(action.increase());
store.dispatch(action.increase());
store.dispatch(action.increase());