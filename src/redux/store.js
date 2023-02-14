import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/categoryReducer';
import budgetReducer from './reducers/budgetReducer';

export const store = configureStore({
    reducer: { categoryReducer, budgetReducer },
});
