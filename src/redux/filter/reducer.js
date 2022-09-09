import { changeFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('', {
  [changeFilter.type]: (state, { payload }) => payload,
});
