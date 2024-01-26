import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCard, getCards } from '../../components/api';
import { setIsErrorModalOpen, storeCards, storeCardInfo } from './reducer';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  (_, thunkApi) => {
    const { dispatch } = thunkApi;

    return getCards()
      .then((resp) => {
        dispatch(storeCards(resp.data.content));
      })
      .catch(() => {
        dispatch(setIsErrorModalOpen(true));
      });
  }
);

export const fetchCardInfo = createAsyncThunk(
  'cards/fetchCardInfo',
  (id: string, thunkApi) => {
    const { dispatch } = thunkApi;

    return getCard(id)
      .then((resp) => {
        dispatch(storeCardInfo(resp.data.content));
      })
      .catch(() => {
        dispatch(setIsErrorModalOpen(true));
      });
  }
);
