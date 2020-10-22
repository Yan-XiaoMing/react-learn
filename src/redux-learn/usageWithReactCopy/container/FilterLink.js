import {connect} from 'react-redux'
import {setVisibilityFilter} from '../action'
import Link from '../components/Link'

const mapStateToProps = (state,ownProps) => {
  console.log(state)
  console.log(ownProps)
  return{
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  console.log(dispatch)
  console.log(ownProps)
  return {
    onClick: ()=>dispatch(setVisibilityFilter(ownProps))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
