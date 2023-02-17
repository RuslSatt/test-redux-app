import { configureStore } from '@reduxjs/toolkit';
import { expenseCardsApi } from './reducers/queries/expenseCardsApi';
import { balanceApi } from './reducers/queries/balanceApi';

export const store = configureStore({
    reducer: {
        [expenseCardsApi.reducerPath]: expenseCardsApi.reducer,
        [balanceApi.reducerPath]: balanceApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([expenseCardsApi.middleware, balanceApi.middleware]),
});
