import { RootState } from '../../store';

const getCardsState = (state: RootState) => {
  return state.cards;
};

export const getCards = (state: RootState) => {
  return getCardsState(state).items;
};

export const getErrorModalOpen = (state: RootState) => {
  return getCardsState(state).isErrorModalOpen;
};
