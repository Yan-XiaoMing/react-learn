import React, {Component} from 'react';

class Refs extends Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  // 你不能在函数组件上使用 ref 属性，因为他们没有实例。

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    // React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。
    // ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。


    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.textInput}/>
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default Refs;
