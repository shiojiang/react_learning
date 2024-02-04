// 创建store
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
// redux中处理异步需要用到中间件redux-thunk
import { thunk } from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';

// 参数1：reducer--干活的
// 参数2：使用中间件
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(applyMiddleware(thunk)),
));

export default store;