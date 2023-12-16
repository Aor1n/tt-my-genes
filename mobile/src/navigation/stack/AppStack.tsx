import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types.ts';
import {theme} from 'styles/theme.ts';
import {SCREEN} from 'navigation/consts.ts';
import LoginScreen from 'screens/login/LoginScreen.tsx';
import RootBottomTabs from 'navigation/tabs/RootBottomTabs.tsx';
import ExpenseScreen from 'screens/expense/ExpenseScreen.tsx';
import {useAppSelector} from 'store/hooks.ts';
import BottomSheetProvider from 'providers/BottomSheetProvider.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  const isLoggedIn = useAppSelector(state => !!state.profile.fullName);

  return (
    <NavigationContainer theme={theme}>
      <BottomSheetProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {!isLoggedIn && (
            <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
          )}
          {isLoggedIn && (
            <Stack.Group>
              <Stack.Screen
                name={SCREEN.ROOT_BOTTOM_TABS}
                component={RootBottomTabs}
              />
              <Stack.Screen
                name={SCREEN.EXPENSE_MODAL}
                component={ExpenseScreen}
                options={{
                  presentation: 'modal',
                }}
              />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </BottomSheetProvider>
    </NavigationContainer>
  );
};

export default AppStack;
