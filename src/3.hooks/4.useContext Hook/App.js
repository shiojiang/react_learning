// 练习useContext hook的使用

// 祖组件传孙组件
import React, {useState, useContext} from 'react';
const Context = React.createContext()

function App() {
  const [color, setColor] = useState('blue');
  return (
    <Context.Provider value={color}>
    <div>
      <h1 style={{color: color}}>我是根组件</h1>
      <button onClick={() => setColor('pink')}>按钮</button>
      <Father />
    </div>
    </Context.Provider>
  )
}

function Father() {
  return (
    <div>
      <h3>我是父组件</h3>
      <Child />
    </div>
  )
}

// 传统写法：使用Context.Consumer消费数据 render-props语法--结构不清晰
// function Child() {
//   return (
//     <Context.Consumer>
//       {
//         (color) => (
//           <div>
//             <h5 style={{color: color}}>我是子组件</h5>
//           </div>
//         )
//       }
//     </Context.Consumer>
//   )
// }

// useContext：使用useContext替代Context.Consumer；参数：传入需要消费的那个Context
function Child() {
  const color = useContext(Context)
  return (
    <div>
      <h5 style={{color: color}}>我是子组件</h5>
    </div>
  )
}

export default App;