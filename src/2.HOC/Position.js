// 需求：在网页中实时显示当前鼠标的位置
import React, { Component } from 'react'

export default class Position extends Component {
  // 仅提供结构
  render() {
    return (
      <div style={{height: 3000}}>
        <div>
          <h3>当前鼠标位置</h3>
          <div>({this.props.x || 0}, {this.props.y || 0})</div>
        </div>

        <div style={{position: 'fixed'}}>
          <h3>滚动条当前位置</h3>
          <div>{this.props.left || 0}, {this.props.top || 0}</div>
        </div>
      </div>
    )
  }
}
