import { configureStore } from '@reduxjs/toolkit';
import showBottomTab from './showBottomTabSlice';
export default configureStore({
  reducer: {showBottomTab: showBottomTab,},
});