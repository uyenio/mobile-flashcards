import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SecondaryButton from './SecondaryButton';
import { restartQuiz } from '../actions/quiz';
import { StyledScore } from '../config/styles'

class Score extends React.Component {
  render() {
    const { dispatch, totalQuestions, totalCorrectAnswers } = this.props
    return (
      <View>
        <StyledScore>
          You passed {totalCorrectAnswers} out of {totalQuestions} questions.
        </StyledScore>
        <SecondaryButton
          text="Restart Quiz?"
          onPress={() => {
            dispatch(restartQuiz());
          }}
        />
      </View>
    );
  }
}

Score.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  totalCorrectAnswers: PropTypes.number.isRequired
};

export default connect()(Score);
