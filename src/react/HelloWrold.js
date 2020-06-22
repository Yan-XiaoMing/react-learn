import React, {Component} from 'react';

function formatName(user){
  return user.firstName + '' + user.lastName;
}

function getGreeting(user) {
  if(user){
    return <h1>Hello, {formatName(user)}</h1>
  }
  else{
    return <h1>Hello,Stranger .</h1>
  }
}

const user = {
  firstName:'yan',
  lastName:'qiMing'
};

const ele = (
  <div>
    <h1>Hello!</h1>
    <h2>Good Baby</h2>
  </div>
);

const cre = React.createElement(
  'h1',
  {className:'cre'},
  'test createElement!'
);

function Welcome(props) {
  return <h1>Hello,{props.name}</h1>
}

class HelloWorld extends Component {


  render() {
    const name = 'yqm';
    const element = <h1>Hello ,{name}</h1>
    return (
      <div>
        {ele}
        {element}
        {cre}
        <h2>Hello,{formatName(user)}</h2>
        <Welcome name={"yqm"}/>
      </div>
    );
  }
}

export default HelloWorld;
