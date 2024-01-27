import React from 'react';
import store from '../store';
import { add, minus } from '../store/action';

// 监听store变化
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('cur-num').innerText = state;
})

function App() {
  const el = (
    <div>
      <h1>根组件</h1>
      <h3>当前数量: <span id="cur-num">{store.getState()}</span></h3>
      <button onClick={() => store.dispatch(add())}>+1</button>
      <button onClick={() => store.dispatch(minus())}>-1</button>
    </div>)

    return el;

}

export default App;
