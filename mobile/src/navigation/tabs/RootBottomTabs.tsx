import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RootStackComponent, RootTabsStackParamList} from 'navigation/types.ts';
import TabBar from 'navigation/tabs/components/TabBar.tsx';
import {SCREEN} from 'navigation/consts.ts';
import HomeScreen from 'screens/home/HomeScreen.tsx';
import ProfileScreen from 'screens/profile/ProfileScreen.tsx';

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
        animation: 'shift',
      }}
      tabBar={RenderTabBar}>
      <RootTabsStack.Screen name={SCREEN.HOME} component={HomeScreen} />
      <RootTabsStack.Screen name={SCREEN.PROFILE} component={ProfileScreen} />
    </RootTabsStack.Navigator>
  );
};

export default RootBottomTabs;
