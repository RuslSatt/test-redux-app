import { configureStore } from '@reduxjs/toolkit';
import expenseCardReducer from './reducers/expenseCardReducer';
import { balanceApi } from './reducers/queries/balanceApi';

export const store = configureStore({
    reducer: { expenseCardReducer, [balanceApi.reducerPath]: balanceApi.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(balanceApi.middleware),
});
