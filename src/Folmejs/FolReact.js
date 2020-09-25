import React, {Component} from 'react';
import {FolPad} from "@folmejs/react";
import ScrollView from "./components/ScrollView";
import './style.css'
import FolmeHooks from './FolmeHooks';

class FolReact extends Component {
  render() {
    return (
      <>
        <FolPad onclick={e => {
          console.log('onclick')
        }}>
          click me
        </FolPad>
        {/*<div className='scroll-wrapper'>*/}
        {/*  /!*<ScrollView/>*!/*/}
        {/*</div>*/}
        <div className='folme-hooks'>
          <FolmeHooks/>
        </div>
      </>
    );
  }
}

export default FolReact;
