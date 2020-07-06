import React, {Component} from 'react';

class NameForm1 extends Component {

  // 要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以使用 ref 来从 DOM 节点中获取表单数据。
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input defaultValue='Bob' type='text' ref={this.input}/>
        </label>
        <input type='submit' value='Submit'/>
      </form>
    );
  }
}

export default NameForm1;
