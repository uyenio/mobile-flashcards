import { combineReducers } from 'redux';
import decks from './deck';
import quiz from './quiz';

export default combineReducers({
  decks,
  quiz,
});
