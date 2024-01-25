import { RootState } from '../../store';

const getCardsState = (state: RootState) => {
  return state.cards;
};

export const getCards = (state: RootState) => {
  return getCardsState(state).items;
};
