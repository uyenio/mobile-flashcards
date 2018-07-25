import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'mobileFlashCards:notifications';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);
}

function getDailyReminder() {
  return {
    title: 'Daily Reminder',
    body: 'You have not taken your daily quiz today yet.',
    ios: {
      sound: true,
    },
  };
}

export function setLocalNotification(chosenTime) {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.scheduleLocalNotificationAsync(getDailyReminder(), {
              time: chosenTime,
              repeat: 'day',
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
