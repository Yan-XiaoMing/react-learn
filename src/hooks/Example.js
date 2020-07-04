import React, {useState, useEffect} from 'react';

//Hooks
function Example() {
  //声明一个名为count的state变量
  const [count, setCount] = useState(0);
  //可以在一个组件中多次使用 State Hook:
  // const [age, setAge] = useState(42);
  // const [fruit, setFruit] = useState('banana');
  // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(document.title);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

//class
// class Example extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       count:0
//     };
//   }
//   render() {
//     return(
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Click me</button>
//       </div>
//     )
//   }
// }

export default Example;
