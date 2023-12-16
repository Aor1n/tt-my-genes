import React, {PropsWithChildren} from 'react';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const BottomSheetProvider = ({children}: PropsWithChildren) => (
  <GestureHandlerRootView style={{flex: 1}}>
    <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
  </GestureHandlerRootView>
);

export default BottomSheetProvider;
