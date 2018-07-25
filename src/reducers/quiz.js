import { 
  CORRECT_ANSWER, 
  INCORRECT_ANSWER, 
  LAST_CORRECT_ANSWER, 
  LAST_INCORRECT_ANSWER,
  RESTART_QUIZ, 
  TOGGLE_ANSWER 
} from "../config/constants";

const initialState = {
  quizDisplay: {
    toggleAnswer: false,
    toggleQuestion: true,
  },
  quizNumbers: {
    questionNumber: 0,
    totalCorrectAnswers: 0
  },
};

const quiz = (state = initialState, action) => {
  switch (action.type) {
    case CORRECT_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: true,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          totalCorrectAnswers: state.quizNumbers.totalCorrectAnswers + 1
        },
      };
    case INCORRECT_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: true,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          totalCorrectAnswers: state.quizNumbers.totalCorrectAnswers
        },
      };
    case LAST_CORRECT_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: false,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          totalCorrectAnswers: state.quizNumbers.totalCorrectAnswers + 1
        },
      };
    case LAST_INCORRECT_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: false,
        },
        quizNumbers: {
          questionNumber: state.quizNumbers.questionNumber + 1,
          totalCorrectAnswers: state.quizNumbers.totalCorrectAnswers
        },
      };
    case RESTART_QUIZ:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: false,
          toggleQuestion: true,
        },
        quizNumbers: {
          questionNumber: 0,
          totalCorrectAnswers: 0
        },
      };
    case TOGGLE_ANSWER:
      return {
        ...state,
        quizDisplay: {
          toggleAnswer: true,
          toggleQuestion: false,
        },
      };
    default:
      return state;
  }
};

export default quiz;
