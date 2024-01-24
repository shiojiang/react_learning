// 获取到窗口滚动条的位置
import {Component} from 'react'

// import PropTypes from 'prop-types'

export default function withScroll(Base) {

  class Scroll extends Component {
    // ---------------------------------------
    // 校验
    // static propTypes = {
    //   children: PropTypes.func.isRequired //children为必传且为函数
    // }

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
    // ---------------------------------------

    render() {
      // return <Base {...this.state}></Base>
      return <Base {...this.props} {...this.state}></Base>
    }
  }

  return Scroll
}

