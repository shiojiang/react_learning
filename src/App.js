// 练习useCallback Hook配合memo的使用

import {useState, memo, useCallback, useMemo} from 'react';

function App() {
  const [count, setCount] = useState(5)
  const [money, setMoney] = useState(100)

  // 2.使用useCallback缓存该函数达到优化性能的目的
  // 记忆的函数 = useCallback(函数, [依赖])

  // 使用useCallback
  // const help = useCallback(() => {
  //   setCount(count + 1)
  // }, [count])

  // 或者使用useMemo
  // 记忆的数据 = useCallback(()=>数据, [依赖])
  const help = useMemo(() => {
    return () => {
      setCount(count + 1)
    }
  }, [count])

  return (
    <div>
      <h1>我是根组件</h1>
      <h3>金钱---{money}</h3>
      <button onClick={() => setCount(count - 1)}>打豆豆</button>
      <button onClick={() => setMoney(money + 100)}>挣钱</button>
      <DouDou count={count} help={help} />
    </div>
  )
}

//1.挣钱功能与打豆豆没半毛钱关系，而点击挣钱，DouDou更新了(每次组件更新，help是一个新的引用的函数)
const DouDou = memo(({count, help}) => {
  console.log('DouDou更新');
  return (
    <div>
      <h3>DouDou---{count}</h3>
      <button onClick={help}>续命</button>
    </div>
  )
})

export default App;