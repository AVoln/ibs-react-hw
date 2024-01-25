import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCards } from '../../components/api';
import { setIsErrorModalOpen, storeCards } from './reducer';

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
