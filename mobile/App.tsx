import React from 'react';
import AppStack from './src/navigation/stack/AppStack.tsx';
import PersistedStoreProvider from './src/context/PersistedStoreProvider.tsx';

function App(): React.JSX.Element {
  return (
    <PersistedStoreProvider>
      <AppStack />
    </PersistedStoreProvider>
  );
}

export default App;
