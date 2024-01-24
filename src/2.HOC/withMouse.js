import React from "react"

// 参数：接收一个普通组件
export default function withMouse(Base) {
  // 创建Mouse组件
  class Mouse extends React.Component {

    // 书写增强的逻辑...
    // ------------------------
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
    // ------------------------

    render() {
      // 渲染普通组件
      // return <Base {...this.state}></Base>
      // 问题：多层组件增强时，外层组件props丢失
      // 解决：为防止外层组件丢失props，需要在增强组件渲染普通组件时传递props
      return <Base {...this.props} {...this.state}></Base>
    }
  }

  return Mouse
}