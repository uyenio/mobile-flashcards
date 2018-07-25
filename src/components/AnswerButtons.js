import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import {
  handleCorrectAnswer,
  handleIncorrectAnswer,
  handleLastCorrectAnswer,
  handleLastIncorrectAnswer,
} from '../actions/quiz';

class AnswerButtons extends React.Component {
  render() {
    const { dispatch, currentQuestionNumber, totalQuestions } = this.props
    if (currentQuestionNumber === totalQuestions) {
      return (
        <View>
          <PrimaryButton text="Correct" onPress={() => dispatch(handleLastCorrectAnswer())}/>
          <SecondaryButton text="Incorrect" onPress={() => dispatch(handleLastIncorrectAnswer())}/>
        </View>
      );
    }
    return (
      <View>
        <PrimaryButton text="Correct" onPress={() => dispatch(handleCorrectAnswer())} />
        <SecondaryButton text="Incorrect" onPress={() => dispatch(handleIncorrectAnswer())}/>
      </View>
    );
  }
}
  
export default connect()(AnswerButtons)