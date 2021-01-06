import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css'
import './style.css';
import AppItem from './AppItem';
import ListItem from './ListItem';
import axios from 'axios'
import TabBar from "./component/tabBar";
// import TimePicker from './component/time-picker'
import FrostedGlass from './component/frostedGlass';
import {Button} from 'antd';
import Main from './redux-learn/usageWithReact/components/Main';
import ContextApp from './contextApi/app'

const pushList = [1,2,3,4,5,6]
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['HTML', 'Js'],

      oddList:[],
      evenList:[]
    };
  }
  updateList = ()=>{
    pushList.forEach(item=>{
      console.log(item)
      if(item%2==0){
        this.setState({evenList:this.state.oddList.push(item)})
      }
      else{
        this.setState({oddList:this.state.evenList.push(item)})
      }
    })
  }

  inputChange = () => {
    this.setState({
        inputValue: this.input.value
      }
    );
  };

  addList = () => {
    console.log(this.state.inputValue);
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  };

  deleteItem = (index) => {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  };

  // componentWillMount() {
  //   console.log('componentWillMount----组件将要挂载到页面的时刻')
  // }

  componentDidMount() {
    this.updateList()
    // console.log('componentDidMount----组件挂载完成的时刻执行')
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res)=>{
       // console.log("成功: "+JSON.stringify(res))
      })
      .catch((err)=>{console.log('获取失败'+JSON.stringify(err))})
  }




  render() {
    // console.log("render");
    return (
      <Fragment>
        <div>
          <label htmlFor="input">加入</label>
          <input id="input" ref={(input)=>{this.input = input}} value={this.state.inputValue} onChange={this.inputChange}/>
          <button onClick={this.addList}> 增加内容</button>
        </div>
        {
          /*jsx注释*/
          //单行注释
        }
        <ul className='my-list'>
          <li>react</li>
          <li>I love react</li>
          <li>{false ? 'wyy' : 'yqm'} love react</li>
        </ul>
        <div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (

                  <AppItem
                    key={index + item}
                    content={item}
                    index={index}
                    deleteItem = {this.deleteItem}

                  />

                  // {
                  //   /*<li
                  //   key={index+item}
                  //   onClick={()=>this.deleteItem(index)}
                  //   dangerouslySetInnerHTML={{__html:item}}
                  // >
                  // </li>*/
                  // }
                );
              })
            }
          </ul>
        </div>
        <ListItem/>
        <TabBar/>
        {/*<TimePicker/>*/}
        <FrostedGlass />
        {/*<Button onClick={runPureRedux}>Redux Pure</Button>*/}
        <Main />
        <ContextApp/>
      </Fragment>
    );
  }
}

export default App;

