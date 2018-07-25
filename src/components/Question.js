import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PrimaryButton from './PrimaryButton';
import { toggleAnswer } from '../actions/quiz';
import { StyledQuestion, StyledRemainingQuestions } from '../config/styles'

class Question extends React.Component {
  render() {
    const { dispatch, question, currentQuestionNumber, totalQuestions } = this.props
    return (
      <View>
        <StyledQuestion>{question}</StyledQuestion>
        <PrimaryButton text="Show answer" onPress={() => dispatch(toggleAnswer())} />
        <StyledRemainingQuestions>
          {currentQuestionNumber + 1} / {totalQuestions}
        </StyledRemainingQuestions>
      </View>
    );
  }
}

Question.propTypes = {
  currentQuestionNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  totalQuestions: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  totalQuestions: state.decks[ownProps.deckTitle].totalQuestions,
  currentQuestionNumber: state.quiz.quizNumbers.questionNumber,
});

export default connect(mapStateToProps)(Question);
