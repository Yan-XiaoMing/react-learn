import React, {Component} from 'react';
import HelloWorld from './HelloWrold';
import Clock from './Clock';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';

class ReactIndex extends Component {
  render() {
    return (
      <div>
        {/*<HelloWorld/>*/}
        <Clock/>
        <NameForm/>
        <FlavorForm/>
        <Reservation/>
        <Calculator/>
      </div>
    );
  }
}

export default ReactIndex;
