import React from 'react';
import {RootStackComponent, RootTabsStackParamList} from '../types.ts';
import {SCREEN} from '../consts.ts';
import HomeScreen from '../../screens/home/HomeScreen.tsx';
import ProfileScreen from '../../screens/profile/ProfileScreen.tsx';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar.tsx';

const RootTabsStack = createBottomTabNavigator<RootTabsStackParamList>();

const RenderTabBar = (props: BottomTabBarProps) => (
  <TabBar index={props.state.index} />
);

const RootBottomTabs: RootStackComponent<
  typeof SCREEN.ROOT_BOTTOM_TABS
> = () => {
  return (
    <RootTabsStack.Navigator
      initialRouteName={SCREEN.HOME}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={RenderTabBar}>
      <RootTabsStack.Screen name={SCREEN.HOME} component={HomeScreen} />
      <RootTabsStack.Screen name={SCREEN.PROFILE} component={ProfileScreen} />
    </RootTabsStack.Navigator>
  );
};

export default RootBottomTabs;
