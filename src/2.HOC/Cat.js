import React, { Component } from 'react'
import rr from './logo192.png'
export default class Cat extends Component {

  // 将鼠标位置逻辑抽离到Mouse.js，仅提供结构
  // state = {
  //   x: 0,
  //   y: 0
  // }

  // move = (e) => {
  //   this.setState({
  //     x: e.pageX,
  //     y: e.pageY
  //   })
  // }

  // componentDidMount() {
  //   document.addEventListener('mousemove', this.move);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('mousemove', this.move);
  // }

  render() {
    return (
      <div>
        <img
          src={rr}
          alt="img"
          style={{
            left: this.props.x,
            top: this.props.y,
            position: 'absolute',
            transform: 'translate(-50%, -50%)'
          }} />
      </div>
    )
  }
}
