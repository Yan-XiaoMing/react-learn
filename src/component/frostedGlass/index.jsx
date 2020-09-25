import React from 'react';
import bgImg from '../../assets/img/1597197483758.jpg'
import './style.css'
const FrostedGlass = (props)=>{
  return (
    <div className='frosted-glass-wrapper' style={{backgroundImage:`url(${bgImg})`,backgroundRepeat:'no-repeat',backgroundSize:'contain'}}>
      <div className='frosted-glass-content'>
        <p>
          The only way to get rid of a temptation[...]"
          Oscar Wilde,
          The Picture of Dorian Gray
        </p>
      </div>
    </div>
  );
}

export default FrostedGlass;
