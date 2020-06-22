import React,{Component} from 'react';

class ListComponent  extends Component{
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return(<h2>List Page - > {this.state.id}</h2>)
  }
  componentDidMount(){
    // console.log(this.props.match.params.id)
    let id = this.props.match.params.id;
    this.setState({id:id})
  }
}

export default ListComponent;
