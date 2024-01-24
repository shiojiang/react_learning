import React from 'react';
import Cat from './Cat';
import Position from './Position';
import Mouse from './Mouse';

import Scroll from './Scroll';
class App extends React.Component {

  render() {
    return (
      <div style={{height: 10000}}>
        <h1>根组件</h1>
        {/* <Cat></Cat> */}
        {/* <Position></Position> */}

        {/* render-props的理解： */}
        {/* 使用Mouse组件，提供需要渲染的结构；同时也能获得渲染该结构需要的参数，传递到需要渲染的结构 */}

        {/* 方式1.传入props */}
        {/* <Mouse render={
          ({x,y}) => (
            // 渲染Position组件
            <Position x={x} y={y}></Position>
          )
        }></Mouse> */}

        {/* 方式2.写到children中结构更加清晰 */}
        <Mouse>{({x,y}) => <Position x={x} y={y}></Position>}</Mouse>

        {/* 渲染Cat组件 */}
        {/* 方式1.传入props */}
        {/* <Mouse render={
          (state) => (
            <Cat {...state}></Cat>
          )
        }></Mouse> */}

        {/* 方式2.写到children中结构更加清晰 */}
        <Mouse>{(state) => <Cat {...state}></Cat>}</Mouse>


        <Scroll>{({left, top}) =>
          <div style={{position: 'fixed'}}>
            <h3>滚动条当前位置</h3>
            <div>{left}, {top}</div>
          </div>
        }</Scroll>
      </div>
    )
  }
}

export default App;
