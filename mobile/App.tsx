import 'react-native-gesture-handler';
import React from 'react';
import PersistedStoreProvider from 'providers/PersistedStoreProvider.tsx';
import AppStack from 'navigation/stack/AppStack.tsx';
import Toast from 'react-native-toast-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PersistedStoreProvider>
        <AppStack />
        <Toast />
      </PersistedStoreProvider>
    </SafeAreaProvider>
  );
}

export default App;
