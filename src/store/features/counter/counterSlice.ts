import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../index';

// 定义 slice state 的类型
interface CounterState {
  value: number;
}

// 使用该类型定义初始 state
const initialState: CounterState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
// selectors 等其他代码可以使用导入的 `RootState` 类型
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
