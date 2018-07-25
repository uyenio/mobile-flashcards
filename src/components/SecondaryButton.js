import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { StyledSecondaryButton } from '../config/styles'

const SecondaryButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <StyledSecondaryButton>{text}</StyledSecondaryButton>
  </TouchableOpacity>
);

SecondaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

SecondaryButton.defaultProps = {
  text: 'Submit',
  onPress: () => {},
};

export default SecondaryButton;
