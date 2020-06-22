import React from 'react';
import {Button, Input, List} from 'antd';
import PropTypes from 'prop-types'

const ListUI = (props)=>{
  return(
    <div>
      <div className='input-wrapper'>
        <Input className='input-item' placeholder={props.inputValue} onChange={props.changeInputValue} value={props.inputValue}/>
        <Button className='input-btn' type='primary' onClick={props.clickBtn}>增加</Button>
      </div>
      <div>
        <List
          className='list-item'
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (<List.Item onClick={()=>props.deleteItem(index)}>{item}</List.Item>)}
        />
      </div>
    </div>
  )
};

ListUI.propTypes = {
  inputValue: PropTypes.string,
  list:PropTypes.array,
  changeInputValue:PropTypes.func,
  clickBtn:PropTypes.func,
  deleteItem:PropTypes.func
};
export default ListUI;
