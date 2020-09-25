import React, {Component} from 'react';
import {Button} from 'antd';

const ThemeContext = React.createContext('light')

// Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。
class Context extends Component {
  render() {
    return (
      <ThemeContext.Provider value='dark'>
        <ToolBar />
      </ThemeContext.Provider>
    );
  }
}

function ToolBar(props){
  return(
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  )
}

class ThemedButton extends Component{
  static contextType = ThemeContext
  render() {
    return(
      <Button theme={this.context} />
    )
  }
}

export default Context;
