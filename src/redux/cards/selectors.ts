import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "Project/store";
import { toNormalizeValue } from "Project/utils/normalize-value";

const getCardsState = (state: RootState) => {
  return state.cards;
};

export const getCards = (state: RootState) => {
  return getCardsState(state).items;
};

export const getCardInfo = (state: RootState) => {
  return getCardsState(state).item;
};

export const getErrorModalOpen = (state: RootState) => {
  return getCardsState(state).isErrorModalOpen;
};

export const getInputValue = (state: RootState) => {
  return getCardsState(state).inputValue;
};

export const getCardsByInputValue = createSelector(
  [getInputValue, getCards],
  (inputValue, cards) => {
    const normalizedValue = toNormalizeValue(inputValue);

    const items = cards.filter((card) => {
      const normalizedName = toNormalizeValue(card.name);

      return normalizedName.includes(normalizedValue);
    });

    return items;
  }
);
