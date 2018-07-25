import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import PrimaryButton from './PrimaryButton';
import { StyledDeckView, StyledDeckTitle, StyledDeckLength } from '../config/styles';

const Deck = (props) => {
  const { title, questions } = props.navigation.state.params;

  return (
    <StyledDeckView>
      <StyledDeckTitle>{title}</StyledDeckTitle>
      <StyledDeckLength>{props.totalQuestions} cards</StyledDeckLength>
      <ButtonWrapper>
        <PrimaryButton text="Add card" onPress={() => props.navigation.navigate('NewCard', { title })}/>
        <PrimaryButton text="Start quiz"
          onPress={() =>
            props.navigation.navigate('Quiz', {
              title,
              questions,
            })
          }
        />
      </ButtonWrapper>
    </StyledDeckView>
  );
};

Deck.propTypes = {
  navigation: PropTypes.object.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  totalQuestions: state.decks[ownProps.navigation.state.params.title].totalQuestions,
});

export default connect(mapStateToProps)(Deck);
