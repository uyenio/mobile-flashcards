import React from 'react';
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo'
import { MainNavigator } from './src/config/routes';
import { STATUSBAR } from './src/config/colours';
import reducer from './src/reducers/index';

function MobileFlashcardStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <MobileFlashcardStatusBar backgroundColor={STATUSBAR} barStyle="light-content"/>
      <MainNavigator />
    </View>
  </Provider>
);

export default App;
