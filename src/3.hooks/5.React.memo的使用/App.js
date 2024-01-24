// 练习React.memo的使用

import {useState, memo} from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>我是根组件</h1>
      <button onClick={() => setCount(count + 1)}>按钮</button>
      <Child1 count={count} />
      <Child2 />
    </div>
  )
}

function Child1({count}) {
  console.log('Child1更新');
  return (
    <div>
      <h3>Child1---{count}</h3>
    </div>
  )
}

// 使用memo包裹，Child2初始打印，后续不会更新了!
const Child2 = memo(() => {
  console.log('Child2更新');
  return (
    <div>
      <h3>Child2---</h3>
    </div>
  )
})

export default App;