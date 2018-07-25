import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { StyledPrimaryButton } from '../config/styles';

const PrimaryButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledPrimaryButton>{text}</StyledPrimaryButton>
  </TouchableOpacity>
);

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

PrimaryButton.defaultProps = {
  text: 'Submit',
  onPress: () => {},
};

export default PrimaryButton;
