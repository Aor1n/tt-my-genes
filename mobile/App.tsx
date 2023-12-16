import 'react-native-gesture-handler';
import React from 'react';
import PersistedStoreProvider from 'providers/PersistedStoreProvider.tsx';
import AppStack from 'navigation/stack/AppStack.tsx';

function App(): React.JSX.Element {
  return (
    <PersistedStoreProvider>
      <AppStack />
    </PersistedStoreProvider>
  );
}

export default App;
