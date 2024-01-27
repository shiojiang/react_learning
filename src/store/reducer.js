import { ADD, MINUS, BUY} from './action_type'
import { combineReducers } from 'redux'

function reducer(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    case BUY:
      return state - action.money;
    default:
      return state;
  }
}

// 处理user模块
function user(state = {
  name: '张三',
  age: 18
}) {
  return state
}

// combineReducers用于合并多个reducer
const rootReducer = combineReducers({
  reducer,
  user
})

export default rootReducer;