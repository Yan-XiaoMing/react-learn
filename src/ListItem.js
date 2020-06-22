import React, {Component} from 'react';
import store from './store/index';
import './style.css'
import {changeInputAction,addItemAction,deleteItemAction} from './store/actionCreators';
import ListUI from './ListUI';
import axios from 'axios'
//const data = ['早上8点上课', '下午1点上课', '晚上6点上课'];

class ListItem extends Component {

  constructor(props) {
    super(props);
    // console.log(store.getState());
    this.state = store.getState();
    this.changeInputValue= this.changeInputValue.bind(this);
    this.storeChange= this.storeChange.bind(this);
    this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }

  changeInputValue(e){
    const action = changeInputAction(e.target.value);
    // console.log('dispatch')
    store.dispatch(action)
  }
  storeChange(){
    console.log(store.getState());
    this.setState(store.getState());
  }
  clickBtn(){
    const action = addItemAction();
    console.log('action');
    store.dispatch(action);
  }
  deleteItem(index){
    const action = deleteItemAction(index)
    store.dispatch(action);
  }

  componentDidMount() {
    axios.get("https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList")
      .then((res)=>{
        console.log(res);
      }).catch((e)=>{
        console.log(e);
    })
  }

  render() {
    return (
      <ListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }
}

export default ListItem;
