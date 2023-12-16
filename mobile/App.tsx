import 'react-native-gesture-handler';
import React from 'react';
import PersistedStoreProvider from 'providers/PersistedStoreProvider.tsx';
import AppStack from 'navigation/stack/AppStack.tsx';
import BottomSheetProvider from 'providers/BottomSheetProvider.tsx';

function App(): React.JSX.Element {
  return (
    <PersistedStoreProvider>
      <BottomSheetProvider>
        <AppStack />
      </BottomSheetProvider>
    </PersistedStoreProvider>
  );
}

export default App;
