import useMouse from './hooks/useMouse';
import useScroll from './hooks/useScroll';

import img from './logo192.png'

// 使用hooks实现鼠标跟随
function App() {

  const position = useMouse();
  const scroll = useScroll();
  return (
    <div>
      <h1>根组件</h1>
      <Cat {...position}></Cat>
      <P {...position}></P>
      <S {...scroll}></S>
    </div>
  )
}

function Cat({x,y}) {
  return (
      <img src={img} alt="img" style={{position: 'absolute', top: y, left: x, transform: 'translate(-50%, -50%)'}}></img>
  )
}

function P({x,y}) {
  return (
      <div>
        <div>当前坐标：{x}, {y}</div>
      </div>
  )
}

function S({left,top}) {
  return (
      <div style={{width: 10000, height: 10000}}>
        <div style={{position: 'fixed'}}>当前滚动条位置：{left}, {top}</div>
      </div>
  )
}


export default App;