// 获取到窗口滚动条的位置
import { Component } from 'react'

import PropTypes from 'prop-types'

export default class Scroll extends Component {

  // 校验
  static propTypes = {
    children: PropTypes.func.isRequired //children为必传且为函数
  }

  state = {
    left : 0,
    top: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
  }

  scroll = () => {
    this.setState({
      left: window.scrollX,
      top: window.scrollY
    })
  }


  render() {
    return this.props.children(this.state)
  }
}
