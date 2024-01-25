import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard } from '../../globalTypes';

interface IInitialCardsState {
  items: ICard[];
  isErrorModalOpen: boolean;
}

const initialState: IInitialCardsState = {
  items: [],
  isErrorModalOpen: false,
};

const cardsReducer = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    storeCards: (state, action: PayloadAction<ICard[]>) => {
      state.items = action.payload;
    },
    setIsErrorModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isErrorModalOpen = action.payload;
    },
  },
});

export const { storeCards, setIsErrorModalOpen } = cardsReducer.actions;
export default cardsReducer.reducer;
