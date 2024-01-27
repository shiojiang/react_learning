import { useSelector, useDispatch } from 'react-redux'
import { add, minus, asyncBuy } from '../store/action'

export function Parent() {
  // 对比useStore & useSelector
  // 1.调用useStore能得到store对象，再用store.getState()获取数据、再用store.dispatch(action)修改数据
  // 2.而调用useSelector能直接得到store中的数据(更具体、方便)

  const state = useSelector((state) => state.user);
  return (
    <div>
      <h1>根组件</h1>
      {`姓名：${state.name}`}
      <Child />
    </div>)
}

function Child() {
  // const store = useStore();
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>子组件</h1>
      <h3>子组件当前数量: <span>{state}</span></h3>
      <button onClick={() => dispatch(add())}>+1</button>&nbsp;
      <button onClick={() => dispatch(minus())}>-1</button>&nbsp;
      <button onClick={() => dispatch(asyncBuy(2))}>测试redux-thunk 1秒后-2</button>
    </div>)
}