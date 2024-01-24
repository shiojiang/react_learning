// 需求：在网页中实时显示当前鼠标的位置
import React, { Component } from 'react'

export default class Position extends Component {
  // 仅提供结构
  render() {
    return (
      <div>
        <h3>当前鼠标位置</h3>
        <div>({this.props.x}, {this.props.y})</div>
      </div>
    )
  }
}
