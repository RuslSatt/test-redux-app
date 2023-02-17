import { balanceApi } from './queries/balanceApi';

export const balanceSlice = balanceApi.injectEndpoints({
    endpoints: builder => ({
        getBalance: builder.query({
            query: () => 'balance',
            transformResponse: res => {
                return res.value;
            },
            providesTags: ['Balance'],
        }),
        editBalance: builder.mutation({
            query: balance => ({
                url: 'balance',
                method: 'PATCH',
                body: balance,
            }),
            invalidatesTags: ['Balance'],
        }),
    }),
});

export const { useGetBalanceQuery, useEditBalanceMutation } = balanceSlice;
