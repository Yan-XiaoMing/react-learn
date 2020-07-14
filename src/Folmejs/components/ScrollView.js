import React, {Component} from 'react';
import {FolScrollView} from '@folmejs/react'

const array = [];
for(let i = 0;i<=30;i++){
  array.push({id:i,value:i})
}

class ScrollView extends Component {
  render() {
    return (
      <FolScrollView>
        {
          array.map((item)=>{
            return (<div className='view-item' key={item.id}>{item.value}</div>)
          })
        }
      </FolScrollView>
    );
  }
}

export default ScrollView;