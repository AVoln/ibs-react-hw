import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCards } from '../../components/api';
import { storeCards } from './reducer';

export const fetchCards = createAsyncThunk(
  'cards/fetchCards',
  (_, thunkApi) => {
    const { dispatch } = thunkApi;

    return getCards()
      .then((resp) => {
        dispatch(storeCards(resp.data.content));
      })
      .catch(() => {
        // dispatch(isModalOpen(true))
      });
  }
);
