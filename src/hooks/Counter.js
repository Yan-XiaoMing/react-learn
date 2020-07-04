import React, {useEffect, useRef, useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const calculation = count + 100;
  const prevCalculation = usePrevious(calculation);

  return <h1>Now: {count}, before: {prevCount}</h1>;
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default Counter;
