import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addNewDeck } from '../actions/deck';
import TextInputField from './TextInputField';
import PrimaryButton from './PrimaryButton';

class NewDeck extends Component {
  state = {
    title: '',
  };

  submitDeckTitle = (payload) => {
    const { title } = this.state;
    this.props.addNewDeck(payload);
    this.props.navigation.navigate('Deck', { title });
  };

  render() {
    return (
      <View>
        <TextInputField
          fieldLabel="What is the title of your new deck?"
          placeholder="Deck title"
          onChangeText={title => this.setState({ title })}
        />
        <PrimaryButton onPress={() => this.submitDeckTitle(this.state)} />
      </View>
    );
  }
}

NewDeck.propTypes = {
  addNewDeck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(null, { addNewDeck })(NewDeck);
