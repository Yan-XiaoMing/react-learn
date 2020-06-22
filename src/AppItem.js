import React, {Component} from 'react';
import PropTypes from 'prop-types'

class AppItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (){
    this.props.deleteItem(this.props.index)
  }

  shouldComponentUpdate(nextProps,nextState,nextContent){

    if(nextProps.content !== this.props.content){
      return true
    }else{
      return false
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.name}为你提供-{this.props.content}
      </div>
    );
  }
}
AppItem.propTypes={
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number,
  name: PropTypes.string.isRequired,
}
AppItem.defaultProps={
  name: 'yqm'
}

export default AppItem;
