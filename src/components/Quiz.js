import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';

const Quiz = ({
  currentQuestionNumber,
  deckTitle,
  cards,
  showAnswer,
  showQuestion,
  totalQuestions,
  totalCorrectAnswers
}) => {
  if (cards[currentQuestionNumber] !== undefined) {
    return (
      <View>
        {showQuestion && (
          <Question
            deckTitle={deckTitle}
            question={cards[currentQuestionNumber].question}
          />
        )}
        {showAnswer && (
          <Answer
            answer={cards[currentQuestionNumber].answer}
            currentQuestionNumber={currentQuestionNumber}
            totalQuestions={totalQuestions}
          />
        )}
      </View>
    );
  }
  return (
    <Score
      totalQuestions={totalQuestions}
      totalCorrectAnswers={totalCorrectAnswers}
    />
  );
};

Quiz.propTypes = {
  currentQuestionNumber: PropTypes.number.isRequired,
  deckTitle: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  showQuestion: PropTypes.bool.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  totalCorrectAnswers: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  currentQuestionNumber: state.quiz.quizNumbers.questionNumber,
  showAnswer: state.quiz.quizDisplay.toggleAnswer,
  showQuestion: state.quiz.quizDisplay.toggleQuestion,
  deckTitle: ownProps.navigation.state.params.title,
  cards: state.decks[ownProps.navigation.state.params.title].questions,
  totalQuestions: state.decks[ownProps.navigation.state.params.title].totalQuestions,
  totalCorrectAnswers: state.quiz.quizNumbers.totalCorrectAnswers
});

export default connect(mapStateToProps)(Quiz);
