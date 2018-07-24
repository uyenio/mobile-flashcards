import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import storeConfig from './src/store/storeConfig';
import { MainNavigator } from './src/config/routes';
import AppStatusBar from './src/components/AppStatusBar';
import { APP_STATUSBAR_BACKGROUND } from './src/config/colours';

const App = () => (
  <Provider store={storeConfig}>
    <View style={{ flex: 1 }}>
      <AppStatusBar
        backgroundColor={APP_STATUSBAR_BACKGROUND}
        barStyle="light-content"
      />
      <MainNavigator />
    </View>
  </Provider>
);

export default App;
