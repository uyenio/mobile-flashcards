import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import InfoButton from './InfoButton';
import { StyledSettingsHeader } from '../config/styles'

const Settings = props => (
  <View>
    <StyledSettingsHeader>Settings</StyledSettingsHeader>
    <InfoButton
      text="Notifications" onPress={() => props.navigation.navigate('Notifications')}
    />
  </View>
);

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Settings;
