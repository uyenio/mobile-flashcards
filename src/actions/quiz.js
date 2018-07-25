import { 
  TOGGLE_ANSWER,
  CORRECT_ANSWER, 
  INCORRECT_ANSWER, 
  LAST_CORRECT_ANSWER, 
  LAST_INCORRECT_ANSWER, 
  RESTART_QUIZ
} from "../config/constants";

export const handleCorrectAnswer = () => ({
  type: CORRECT_ANSWER,
});

export const handleIncorrectAnswer = () => ({
  type: INCORRECT_ANSWER,
});

export const handleLastCorrectAnswer = () => ({
  type: LAST_CORRECT_ANSWER,
});

export const handleLastIncorrectAnswer = () => ({
  type: LAST_INCORRECT_ANSWER,
});

export const restartQuiz = () => ({
  type: RESTART_QUIZ,
});

export const toggleAnswer = () => ({
  type: TOGGLE_ANSWER,
});
