import React, {PropsWithChildren} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from 'store/store.ts';

const PersistedStoreProvider = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default PersistedStoreProvider;
