import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    budget: 0,
};

export const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addBudget: (state, action) => {
            state.budget = action.payload;
        },
    },
});

export const budget = state => state.budgetReducer.budget;

export const { addBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
