// action creator

import { ADD, MINUS, BUY } from './action_type'

// 1.如果是同步的action直接返回一个对象
export const add = () => ({ type: ADD});
export const minus = () => ({ type: MINUS});
export const buy = (money) => ({ type: BUY, money});

// 2.如果是异步的action，需要返回一个函数，在函数中处理异步逻辑，完成后dispatch同步的action
export const asyncBuy = (money) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(buy(money));
    }, 1000);
  }
};
