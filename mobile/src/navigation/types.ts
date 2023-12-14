import {FC} from 'react';
import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {SCREEN} from 'navigation/consts.ts';

export type RootStackParamList = {
  [SCREEN.ROOT_BOTTOM_TABS]: undefined;
  [SCREEN.LOGIN]: undefined;
  [SCREEN.EXPENSE_MODAL]: {id?: string};
};

export type RootTabsStackParamList = {
  [SCREEN.HOME]: undefined;
  [SCREEN.PROFILE]: undefined;
};

export type BottomTabNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabsStackParamList, SCREEN.HOME | SCREEN.PROFILE>,
  StackNavigationProp<RootStackParamList>
>;

type StackParamLists = RootStackParamList & RootTabsStackParamList;

export type RootStackComponent<RouteName extends keyof StackParamLists> = FC<{
  navigation: StackNavigationProp<StackParamLists, RouteName>;
  route: RouteProp<StackParamLists, RouteName>;
}>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
