import React from 'react';
import PersistedStoreProvider from 'context/PersistedStoreProvider.tsx';
import AppStack from 'navigation/stack/AppStack.tsx';

function App(): React.JSX.Element {
  return (
    <PersistedStoreProvider>
      <AppStack />
    </PersistedStoreProvider>
  );
}

export default App;
