import React from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className='FancyButton'>
    {props.children}
  </button>
));

const ref = React.createRef();

export default (<FancyButton ref={ref}>Click me!</FancyButton>);
