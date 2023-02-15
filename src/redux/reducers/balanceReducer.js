import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BALANCE_URL = 'http://localhost:3000/balance';

const initialState = {
    balance: 0,
};

export const getBalance = createAsyncThunk('getBalance', async () => {
    try {
        const response = await axios.patch(BALANCE_URL);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err.message);
    }
});

export const editBalance = createAsyncThunk('editBalance', async balance => {
    try {
        const response = await axios.patch(BALANCE_URL, balance);
        return response.data;
    } catch (err) {
        console.log(err.message);
    }
});

export const balanceSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addBalance: (state, action) => {
            state.balance += action.payload;
        },
        deleteBalance: (state, action) => {
            state.balance -= action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(editBalance.fulfilled, (state, action) => {
                state.balance = action.payload.value;
            })
            .addCase(getBalance.fulfilled, (state, action) => {
                state.balance = action.payload.value;
            });
    },
});

export const balance = state => state.balanceReducer.balance;

export const { addBalance, deleteBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
