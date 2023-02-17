import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const balanceApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['Balance'],
    endpoints: () => ({}),
});
