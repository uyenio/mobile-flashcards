import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../components/Home';
import Settings from '../components/Settings';
import Deck from '../components/Deck';
import Quiz from '../components/Quiz';
import NewDeck from '../components/NewDeck';
import NewCard from '../components/NewCard';
import Notifications from '../components/Notifications';
import {
  NAV_HEADER,
  NAV_HEADER_TINT,
  TAB_BAR_ACTIVE_TINT_ANDROID,
  TAB_BAR_ACTIVE_TINT_IOS,
  TAB_BAR_ANDROID,
  TAB_BAR_IOS,
} from './colours';

export const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        ),
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'Create quiz',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="cog" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor:
        Platform.OS === 'ios'
          ? TAB_BAR_ACTIVE_TINT_IOS
          : TAB_BAR_ACTIVE_TINT_ANDROID,
      style: {
        height: 56,
        backgroundColor:
          Platform.OS === 'ios'
            ? TAB_BAR_IOS
            : TAB_BAR_ANDROID,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

export const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      headerTintColor: NAV_HEADER_TINT,
      headerStyle: {
        backgroundColor: NAV_HEADER,
      },
    },
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: NAV_HEADER_TINT,
      headerStyle: {
        backgroundColor: NAV_HEADER,
      },
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications',
    },
  },
});
