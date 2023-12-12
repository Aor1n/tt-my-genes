import type {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {SCREEN} from './consts.ts';
import {FC} from 'react';

export type RootStackParamList = {
  [SCREEN.ROOT_BOTTOM_TABS]: undefined;
  [SCREEN.LOGIN]: undefined;
  [SCREEN.EDIT_EXPENSE_MODAL]: {id: string};
  [SCREEN.CREATE_EXPENSE_MODAL]: undefined;
};

export type RootTabsStackParamList = {
  [SCREEN.HOME]: undefined;
  [SCREEN.PROFILE]: undefined;
};

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
