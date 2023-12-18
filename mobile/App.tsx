import 'react-native-gesture-handler';
import React from 'react';
import PersistedStoreProvider from 'providers/PersistedStoreProvider.tsx';
import AppStack from 'navigation/stack/AppStack.tsx';
import Toast from 'react-native-toast-message';
import ErrorBoundaryProvider from 'providers/ErrorBoundary.tsx';

function App(): React.JSX.Element {
  return (
    <ErrorBoundaryProvider>
      <PersistedStoreProvider>
        <AppStack />
        <Toast />
      </PersistedStoreProvider>
    </ErrorBoundaryProvider>
  );
}

export default App;
