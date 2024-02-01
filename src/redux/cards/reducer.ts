import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICard, ICardInfo } from 'Project/globalTypes';

interface IInitialCardsState {
  items: ICard[];
  item: ICardInfo | null;
  isErrorModalOpen: boolean;
  inputValue: string;
}

const initialState: IInitialCardsState = {
  items: [],
  item: null,
  isErrorModalOpen: false,
  inputValue: '',
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
    storeCardInfo: (state, action: PayloadAction<ICardInfo>) => {
      state.item = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

console.log('cardsReducer', cardsReducer);

export const { storeCards, setIsErrorModalOpen, storeCardInfo, setInputValue } =
  cardsReducer.actions;
export default cardsReducer.reducer;
