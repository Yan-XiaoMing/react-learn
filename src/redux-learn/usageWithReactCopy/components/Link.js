import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active,children,onClick})=>{
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{marginLeft:'4px'}}
    >
      {children}
    </button>
  );
}

export default Link;
