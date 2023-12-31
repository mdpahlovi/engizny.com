"use client";

import { CardPayload, CardState } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProductCard {
    cards: CardState[];
}

const initialState: IProductCard = {
    cards: [],
};

export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addToCard: (state, action: PayloadAction<CardPayload>) => {
            const isExist = state.cards.find((product) => product.product === action.payload.product);
            if (isExist) {
                isExist.quantity = isExist.quantity! + 1;
            } else {
                state.cards.push({ ...action.payload, quantity: 1 });
            }
        },
        removeOne: (state, action: PayloadAction<number>) => {
            const isExist = state.cards.find((product) => product.product === action.payload);
            if (isExist && isExist.quantity! > 1) {
                isExist.quantity = isExist.quantity! - 1;
            } else {
                state.cards = state.cards.filter((product) => product.product !== action.payload);
            }
        },
        removeFromCard: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.filter((product) => product.product !== action.payload);
        },
    },
});

export const { addToCard, removeOne, removeFromCard } = cardSlice.actions;

export default cardSlice.reducer;
