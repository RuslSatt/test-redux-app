import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const expenseCardsApi = createApi({
    reducerPath: 'expenseCardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['ExpenseCards'],
    endpoints: () => ({}),
});
