import { 
  CORRECT_ANSWER, 
  INCORRECT_ANSWER, 
  MANAGE_QUIZ_END_INC_SCORE, 
  MANAGE_QUIZ_END_DEC_SCORE, 
  RESET_QUIZ, 
  TOGGLE_ANSWER
} from "../config/constants";

export const handleCorrectAnswer = () => ({
  type: CORRECT_ANSWER,
});

export const handleIncorrectAnswer = () => ({
  type: INCORRECT_ANSWER,
});

export const manageQuizEndIncrementScore = () => ({
  type: MANAGE_QUIZ_END_INC_SCORE,
});

export const manageQuizEndDecrementScore = () => ({
  type: MANAGE_QUIZ_END_DEC_SCORE,
});

export const resetQuiz = () => ({
  type: RESET_QUIZ,
});

export const toggleAnswer = () => ({
  type: TOGGLE_ANSWER,
});
