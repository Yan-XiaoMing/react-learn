import  {h, Component } from 'preact'

export default class Item extends Component {
  componentDidMount () {
    /* eslint-disable-next-line */
    this.props.cachePosition(this.node, this.props.index)
  }

  render () {
    /* eslint-disable-next-line */
    const {index, item} = this.props

    return (
      <div className='list-item' style={{ height: '60px' }} ref={node => { this.node = node }}>
        <span>#{index} </span>
      </div>
    )
  }
}