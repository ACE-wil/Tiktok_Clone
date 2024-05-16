import { createSlice } from '@reduxjs/toolkit';

export const showBottomTabSlice = createSlice({
  name: 'showBottomTab',
  initialState: {
    value: 'true',
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit 允许我们在 reducers 中编写 mutating 逻辑。
      // 它实际上并没有 mutate state 因为它使用了 Immer 库，
      // 它检测到草稿 state 的变化并产生一个全新的基于这些更改的不可变 state
      state.value = false;
    },
    decrement: (state) => {
      state.value = 'true';
    }
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { increment, decrement} = showBottomTabSlice.actions;

export default showBottomTabSlice.reducer;