import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeHeader from './HomeHeader';
import { StyledTouchableOpacity, StyledDeckTitle, StyledDeckLength } from '../config/styles';

class Home extends React.Component {
  render() {
    this.renderItemList = ({ item }) => {
      const { title, questions } = item;
      return (
        <StyledTouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Deck', {
              title,
              questions,
            })
          }
        >
          <StyledDeckTitle>{title}</StyledDeckTitle>
          <StyledDeckLength>{questions.length} cards</StyledDeckLength>
        </StyledTouchableOpacity>
      );
    };

    return (
      <View>
        <HomeHeader />
        <View>
          <FlatList
            data={this.props.deckInfo} renderItem={this.renderItemList} keyExtractor={item => item.title}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps ( { decks } ) {
  return {
    deckInfo: Object.keys(decks).map(key => ({
      title: decks[key].title,
      questions: decks[key].questions,
    }))
  }
}

Home.propTypes = {
  deckInfo: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Home);
