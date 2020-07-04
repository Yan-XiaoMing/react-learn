import React, {useReducer} from 'react';

const initCount = {count: 0};

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
  ;
};

function Counter() {
  const [state, dispatch] = useReducer(
    reducer,
    initCount,
    init
  );
  return (
    <>
      Count:{state.count}
      <button onClick={() => dispatch(type:'reset'),payload:initCount}></button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}


