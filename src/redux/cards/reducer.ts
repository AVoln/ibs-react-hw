import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../globalTypes';

interface IInitialCardsState {
  items: ICard[];
}

const initialState: IInitialCardsState = {
  items: [],
};

const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    storeCards: (state, action: PayloadAction<ICard[]>) => {
      state.items = action.payload;
    },
  },
});

export const { storeCards } = cardsReducer.actions;
export default cardsReducer.reducer;
