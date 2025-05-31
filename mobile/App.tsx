import 'react-native-gesture-handler';
import React from 'react';
import PersistedStoreProvider from 'providers/PersistedStoreProvider.tsx';
import AppStack from 'navigation/stack/AppStack.tsx';
import Toast from 'react-native-toast-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {KeyboardProvider} from 'react-native-keyboard-controller';

function App(): React.JSX.Element {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <PersistedStoreProvider>
          <AppStack />
          <Toast />
        </PersistedStoreProvider>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
}

export default App;
