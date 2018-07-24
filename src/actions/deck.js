import { ADD_NEW_CARD, ADD_NEW_DECK } from "../config/constants";

export const addNewCard = payload => ({
  type: ADD_NEW_CARD,
  payload,
});

export const addNewDeck = payload => ({
  type: ADD_NEW_DECK,
  payload,
});
