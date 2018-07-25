import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerButtons from './AnswerButtons';
import { StyledAnswer, StyledRemainingQuestions } from '../config/styles';

class Answer extends React.Component {
  render() {
    const { answer, currentQuestionNumber, totalQuestions } = this.props
    return (
      <View>
        <StyledAnswer>{answer}</StyledAnswer>
        <AnswerButtons currentQuestionNumber={currentQuestionNumber} totalQuestions={totalQuestions} />
        <StyledRemainingQuestions>
          {currentQuestionNumber + 1} / {totalQuestions}
        </StyledRemainingQuestions>
      </View>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  currentQuestionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default connect()(Answer)