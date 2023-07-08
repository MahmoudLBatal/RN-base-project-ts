import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {Container, SText} from 'components';
import {Provider} from 'react-redux';
import {persistor, store} from 'store';
import {PersistGate} from 'redux-persist/integration/react';
import RootAppNavigator from 'navigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootAppNavigator />
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
