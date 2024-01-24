// 作用：提供鼠标位置的逻辑，不负责渲染结构
// *学习render-props

import { Component } from 'react'

export default class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  }

  move = (e) => {
    this.setState({
      x: e.pageX,
      y: e.pageY
    })
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.move);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.move);
  }

  render() {
    // render-props的理解：
    // 接收一个名为render的属性，属性是一个函数，可以传入参数；使用该组件时可以获取函数传递的参数
    // 调这个函数，拿到接收到的结构

    // 方式1 通过属性传
    // return this.props.render(this.state)
    // 方式2 通过children传
    return this.props.children(this.state)
  }
}
