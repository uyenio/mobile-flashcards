import React from 'react';
import { View } from 'react-native';
import { StyledHomeHeader, StyledHomeSubHeader } from '../config/styles'

const HomeHeader = () => (
  <View>
    <StyledHomeHeader>UdaciMobile Flashcards</StyledHomeHeader>
    <StyledHomeSubHeader>Select a deck to learn or create new deck</StyledHomeSubHeader>
  </View>
);

export default HomeHeader;
