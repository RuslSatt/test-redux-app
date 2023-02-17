import { expenseCardsApi } from './queries/expenseCardsApi';

export const expenseCardsSlice = expenseCardsApi.injectEndpoints({
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => 'categories',
            providesTags: ['ExpenseCards'],
        }),
        getCards: builder.query({
            query: () => 'expenseCards',
            providesTags: result => {
                if (result) {
                    return [
                        ...result.map(({ id }) => ({ type: 'ExpenseCards', id })),
                        { type: 'ExpenseCards', id: 'LIST' },
                    ];
                } else {
                    return [{ type: 'ExpenseCards', id: 'LIST' }];
                }
            },
        }),
        addCard: builder.mutation({
            query: model => ({
                url: 'expenseCards',
                method: 'POST',
                body: model,
            }),
            invalidatesTags: ['ExpenseCards'],
        }),
    }),
});

export const { useGetCategoriesQuery, useGetCardsQuery, useAddCardMutation } = expenseCardsSlice;
