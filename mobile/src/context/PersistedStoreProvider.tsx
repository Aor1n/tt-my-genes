import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {PropsWithChildren} from 'react';
import {persistor, store} from 'store/index.ts';

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
