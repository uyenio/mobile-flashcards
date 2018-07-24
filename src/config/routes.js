import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import HomeView from '../components/HomeView';
import Settings from '../components/Settings';
import QuizOverview from '../components/QuizOverview';
import RunQuiz from '../components/RunQuiz';
import NewDeckForm from '../components/NewDeckForm';
import NewCardForm from '../components/NewCardForm';
import Notifications from '../components/Notifications';
import {
  NAV_HEADER_BACKGROUND,
  NAV_HEADER_TINT,
  TAB_BAR_ACTIVE_TINT_ANDROID,
  TAB_BAR_ACTIVE_TINT_IOS,
  TAB_BAR_BACKGROUND_ANDROID,
  TAB_BAR_BACKGROUND_IOS,
} from './colours';

export const Tabs = createBottomTabNavigator(
  {
    HomeView: {
      screen: HomeView,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        ),
      },
    },
    NewDeckForm: {
      screen: NewDeckForm,
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
            ? TAB_BAR_BACKGROUND_IOS
            : TAB_BAR_BACKGROUND_ANDROID,
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
  QuizOverview: {
    screen: QuizOverview,
    navigationOptions: {
      title: 'Deck',
    },
  },
  Quiz: {
    screen: RunQuiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  NewDeckForm: {
    screen: NewDeckForm,
    navigationOptions: {
      headerTintColor: NAV_HEADER_TINT,
      headerStyle: {
        backgroundColor: NAV_HEADER_BACKGROUND,
      },
    },
  },
  NewCardForm: {
    screen: NewCardForm,
    navigationOptions: {
      headerTintColor: NAV_HEADER_TINT,
      headerStyle: {
        backgroundColor: NAV_HEADER_BACKGROUND,
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
