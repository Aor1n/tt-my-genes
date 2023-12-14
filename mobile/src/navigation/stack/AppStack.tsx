import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from '../../styles/theme.ts';
import {SCREEN} from '../consts.ts';
import LoginScreen from '../../screens/login/LoginScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types.ts';
import RootBottomTabs from '../tabs/RootBottomTabs.tsx';
import ExpenseScreen from '../../screens/expense/ExpenseScreen.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => (
  <NavigationContainer theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
      <Stack.Screen name={SCREEN.ROOT_BOTTOM_TABS} component={RootBottomTabs} />
      <Stack.Screen
        name={SCREEN.EXPENSE_MODAL}
        component={ExpenseScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
