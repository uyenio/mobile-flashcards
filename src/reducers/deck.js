import { initialDeckData } from '../utils/api';
import { ADD_NEW_CARD, ADD_NEW_DECK } from "../config/constants";

const decks = (state = initialDeckData, action) => {
  switch (action.type) {
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.payload.title]: {
          title: state[action.payload.title].title,
          totalQuestions: state[action.payload.title].totalQuestions + 1,
          questions: [
            ...state[action.payload.title].questions,
            {
              question: action.payload.question,
              answer: action.payload.answer,
            },
          ],
        },
      };
    case ADD_NEW_DECK:
      return {
        ...state,
        [action.payload.title]: {
          ...action.payload,
          totalQuestions: 0,
          questions: [],
        },
      };
    default:
      return state;
  }
};

export default decks;
