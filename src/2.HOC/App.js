import React from 'react';
import Cat from './Cat';
import Position from './Position';
import withMouse from './withMouse';
import withScroll from './withScroll';

const CatWithMouse = withMouse(Cat)
// const PositionWithMouse = withMouse(Position)
// const ScrollWithScroll = withScroll(Position)

// 问题：多层组件增强时，外层组件props丢失
// 解决：为防止外层组件丢失props，需要在增强组件渲染普通组件时传递props
const ScrollWithScroll = withMouse(withScroll(Position))

class App extends React.Component {

  render() {
    return (
      <div>
        <CatWithMouse></CatWithMouse>
        {/* <PositionWithMouse></PositionWithMouse> */}
        <ScrollWithScroll></ScrollWithScroll>
      </div>
    )
  }
}

export default App;
