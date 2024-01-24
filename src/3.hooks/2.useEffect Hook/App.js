import React, {useState, useEffect} from 'react';

// class组件实现操作title
// class App extends React.Component {
//   state = {
//     count: 0
//   }

//   // ------------------------
//   // 操作DOM在钩子函数中完成
//   componentDidMount() {
//     document.title = `点击了${this.state.count}次`
//   }

//   componentDidUpdate() {
//     document.title = `点击了${this.state.count}次`
//   }
//   // ------------------------

//   render() {
//     return (
//       <div>
//         <h1>根组件</h1>
//         <div>点击{this.state.count}次
//           <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
//         </div>
//       </div>
//     )
//   }
// }

// useState Hook实现操作title
function App() {
    const [count, setCount ] = useState(0)
    const [money, setMoney ] = useState(0)

    // 参数1：回调函数，执行时期为组件渲染完成；对比类组件相当于是在componentDidMount和componentDidUpdate生命周期执行(每次render后执行)
    // 参数2：数组，useEffect的依赖项；若指定了依赖项，回调函数只会在依赖项发生改变时执行；
    // 若依赖项为一个[]，则回调函数只会在组件第一次渲染后执行，对比类组件相当于componentDidMount钩子的作用；应用场景：注册事件、发请求
    useEffect(() => {
      document.title = `点击了${count}次`
      console.log(`点击了${count}次`);
    }, [count])

    return (
      <div>
        <h1>根组件</h1>
        <div>点击{count}次
          <button onClick={() => setCount(count + 1)}>打豆豆</button>
          {count<=2 ? <Child count={count}></Child> : '豆豆Over'}
        </div>

        {/* 若useEffect不指定依赖项，则点击+钱，回调也会执行 */}
        <div>{money}元钱
          <button onClick={() => setMoney(money + 100)}>+钱</button>
        </div>
      </div>
    )
}

function Child({count}) {

  // 清理副作用: useEffect函数中return一个函数
  // 开启定时器-打印
  useEffect(() => {
    const t = window.setInterval(() => {
      console.log('打豆豆呀');
    }, 1000);

    // 清理副作用的函数，执行时机：组件销毁(相当于componentWillUnmount)、回调每次执行前(相当于componentDidMount)(不指定依赖项时)
    // 订阅外部数据源(定时器、注册事件等)副作用需要清除
    return () => {
      clearInterval(t);
      console.log('阿伟死了');
    }
  }, [])
  return (
    <div>
      <h3>我是子组件{count}</h3>
    </div>
  )
}


export default App;


// useEffect总结：
// 1.基本语法：
// (1) useEffect(() => {}) 组件第一次渲染及每次更新执行
// (2) useEffect(() => {}, []) 组件第一次渲染执行
// (3) useEffect(() => {}, [xx]) 组件第一次渲染及xx变化执行
// 2.清理副作用：
// (1)不指定依赖，执行时机：组件销毁、回调每次执行前
// useEffect(() => {
//   //一些代码
//   return () => {} //清理副作用
// })
// (2)指定依赖，执行时机：组件销毁
// useEffect(() => {
//   //一些代码
//   return () => {} //清理副作用
// }, [])