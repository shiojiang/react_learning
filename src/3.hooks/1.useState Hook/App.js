import React, {useState} from 'react';


// class组件实现+1
// class App extends React.Component {

//   state= {
//     count: 0
//   }

/** 注意点：setState本身并不是异步，在React性能优化机制表现为异步
 * 在React生命周期函数或者作用域下为异步，在原生环境下为同步
 */
//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>根组件</h1>
//         <div>点击{this.state.count}次
//           <button onClick={this.handleClick}>+1</button>
//         </div>
//       </div>
//     )
//   }
// }

// useState Hook实现+1
function App() {
  // 参数：初始值
  // 返回值：长度为2的数组，分别是状态和修改状态的函数
    const [count, setCount ] = useState(0)

    const handleClick = () => setCount(count + 1) // 接收新的状态值进行覆盖；状态改变，组件会重新渲染

    return (
      <div>
        <h1>根组件</h1>
        <div>点击{count}次
          <button onClick={handleClick}>+1</button>
        </div>
      </div>
    )
}


export default App;
