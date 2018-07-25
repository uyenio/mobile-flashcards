import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewCard } from '../actions/deck';
import TextInputField from './TextInputField';
import PrimaryButton from './PrimaryButton';

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  submitCard = () => {
    const { title } = this.props.navigation.state.params;
    const payload = {
      title,
      question: this.state.question,
      answer: this.state.answer,
    };
    this.props.addNewCard(payload);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <TextInputField
          fieldLabel="Please enter your card question"
          placeholder="Question"
          onChangeText={question => this.setState({ question })}
        />
        <TextInputField
          fieldLabel="Please enter your card answer"
          placeholder="Answer"
          onChangeText={answer => this.setState({ answer })}
        />
        <PrimaryButton onPress={() => this.submitCard()} />
      </View>
    );
  }
}

NewCard.propTypes = {
  addNewCard: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(null, { addNewCard })(NewCard);
