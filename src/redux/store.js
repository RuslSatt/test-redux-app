import { configureStore } from '@reduxjs/toolkit';
import expenseCardReducer from './reducers/expenseCardReducer';
import balanceReducer from './reducers/balanceReducer';

export const store = configureStore({
    reducer: { expenseCardReducer, balanceReducer },
});
