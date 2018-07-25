import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { StyledTextInputWrapper, StyledFieldLabel } from '../config/styles'

const TextInputField = ({
  fieldLabel,
  placeholder,
  onChangeText,
}) => (
  <StyledTextInputWrapper>
    <StyledFieldLabel>{fieldLabel}</StyledFieldLabel>
    <TextInput style={{ height: 40 }} placeholder={placeholder} blurOnSubmit keyboardType="default" onChangeText={onChangeText} />
  </StyledTextInputWrapper>
);

TextInputField.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default TextInputField;
