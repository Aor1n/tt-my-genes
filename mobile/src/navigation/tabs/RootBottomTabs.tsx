import React from 'react';
import {RootStackComponent, RootTabsStackParamList} from '../types.ts';
import {SCREEN} from '../consts.ts';
import HomeScreen from '../../screens/home/HomeScreen.tsx';
import ProfileScreen from '../../screens/profile/ProfileScreen.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const RootTabsStack = createBottomTabNavigator<RootTabsStackParamList>();

const RootBottomTabs: RootStackComponent<
  typeof SCREEN.ROOT_BOTTOM_TABS
> = () => {
  return (
    <RootTabsStack.Navigator
      initialRouteName={SCREEN.HOME}
      screenOptions={{
        headerShown: false,
      }}>
      <RootTabsStack.Screen name={SCREEN.HOME} component={HomeScreen} />
      <RootTabsStack.Screen name={SCREEN.PROFILE} component={ProfileScreen} />
    </RootTabsStack.Navigator>
  );
};

export default RootBottomTabs;
