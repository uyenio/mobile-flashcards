import React, { Component } from 'react';
import { Alert, DatePickerIOS, View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import {
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';
import { NotificationPrompt } from '../config/styles'

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenTime: new Date() };
    this.setTime = this.setTime.bind(this);
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime });
  }

  render() {
    const confirmNotification = (string) => {
      Alert.alert(
        'Notifications',
        `are ${string}`,
        { text: 'OK' },
        { cancelable: false }
      );
    };
    return (
      <View>
        <NotificationPrompt>Set a daily reminder</NotificationPrompt>
        <DatePickerIOS
          date={this.state.chosenTime}
          onDateChange={this.setTime}
          mode="time"
        />
        <PrimaryButton
          onPress={() =>
            clearLocalNotification()
              .then(setLocalNotification(this.state.chosenTime))
              .then(confirmNotification('activated.'))
          }
        />
        <SecondaryButton
          text="Clear notifications"
          onPress={() =>
            clearLocalNotification().then(confirmNotification('cancelled.'))
          }
        />
      </View>
    );
  }
}

export default Notifications;
