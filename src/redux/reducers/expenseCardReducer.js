import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

const CATEGORY_URL = 'http://localhost:3000/categories';
const CATEGORY_EXPENSE_CARDS = 'http://localhost:3000/expenseCards';

const initialState = {
    cards: [],
    categories: [],
    sum: null,
    selectCategory: null,
};

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
    try {
        const response = await axios.get(CATEGORY_URL);
        return [...response.data];
    } catch (err) {
        console.log(err.message);
    }
});

export const getCards = createAsyncThunk('cards/getCard', async () => {
    try {
        const response = await axios.get(CATEGORY_EXPENSE_CARDS);
        return [...response.data];
    } catch (err) {
        console.log(err.message);
    }
});

export const addCard = createAsyncThunk('addCard', async item => {
    try {
        const response = await axios.put(CATEGORY_EXPENSE_CARDS, item);
        return response.data;
    } catch (err) {
        console.log(err.message);
    }
});

export const expenseCardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            const id = action.payload;
            if (!id) return;
            const findItem = state.categories.find(item => item.id === id);
            state.selectCategory = findItem;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = state.categories.concat(action.payload);
            })
            .addCase(getCards.fulfilled, (state, action) => {
                state.cards = state.cards.concat(action.payload);
            })
            .addCase(addCard.fulfilled, (state, action) => {
                const item = action.payload;
                item.id = nanoid();
                state.cards = [...state.cards, item];
            });
    },
});

export const { selectCategory } = expenseCardSlice.actions;

export const allCategories = state => state.expenseCardReducer.categories;
export const getAllCards = state => state.expenseCardReducer.cards;

export default expenseCardSlice.reducer;
