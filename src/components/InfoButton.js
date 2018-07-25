import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { StyledInfoButton } from '../config/styles';

const InfoButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledInfoButton>{text}</StyledInfoButton>
  </TouchableOpacity>
);

InfoButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

InfoButton.defaultProps = {
  text: 'Submit',
  onPress: () => {},
};

export default InfoButton;
