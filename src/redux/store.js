import { configureStore } from '@reduxjs/toolkit';
import expenseCardReducer from './reducers/expenseCardReducer';
import budgetReducer from './reducers/budgetReducer';

export const store = configureStore({
    reducer: { expenseCardReducer, budgetReducer },
});
