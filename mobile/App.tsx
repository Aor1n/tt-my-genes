import 'react-native-gesture-handler';
import React from 'react';
import PersistedStoreProvider from 'providers/PersistedStoreProvider.tsx';
import AppStack from 'navigation/stack/AppStack.tsx';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <PersistedStoreProvider>
      <AppStack />
      <Toast />
    </PersistedStoreProvider>
  );
}

export default App;
