import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {useCbOnce} from 'hooks/useCbOnce.ts';
import {SCREEN} from 'navigation/consts.ts';
import {TabItem} from 'navigation/tabs/components/TabItem.tsx';
import PlusIcon from 'assets/icons/plus.svg';
import getStylesHook from 'utils/getStylesHook.ts';
import IS_IOS from 'consts/IS_IOS.ts';

const TabBar = ({index}: {index: BottomTabBarProps['state']['index']}) => {
  const {bottom: bottomInsert} = useSafeAreaInsets();
  const {styles} = useStyles(bottomInsert);
  const {navigate} = useNavigation();

  const onPress = useCbOnce(_ => {
    navigate({
      name: SCREEN.EXPENSE_MODAL,
      params: {expense: undefined},
    });
  });

  return (
    <View style={styles.container}>
      <TabItem
        info={{
          screen: SCREEN.HOME,
          key: 0,
        }}
        index={index}
      />
      <TouchableOpacity
        style={styles.plusContainer}
        activeOpacity={0.8}
        onPress={onPress}>
        <PlusIcon width={32} height={32} />
      </TouchableOpacity>
      <TabItem
        info={{
          screen: SCREEN.PROFILE,
          key: 1,
        }}
        index={index}
      />
    </View>
  );
};

const PLUS_CONTAINER_SIZE = 56;

const PLUS_CONTAINER_HALF_SIZE = 56 / 2;

const PLUS_CONTAINER_POSITION =
  Dimensions.get('window').width / 2 - PLUS_CONTAINER_HALF_SIZE;

const TAB_ITEM_PADDING = 20;

const useStyles = getStylesHook<number>((theme, bottomInsert = 20) => ({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.colors.divider,
    paddingTop: bottomInsert - TAB_ITEM_PADDING,
    paddingBottom: bottomInsert - TAB_ITEM_PADDING + (IS_IOS ? 0 : 6),
  },
  plusContainer: {
    position: 'absolute',
    zIndex: 1,
    top: -PLUS_CONTAINER_HALF_SIZE + 5,
    left: PLUS_CONTAINER_POSITION,
    justifyContent: 'center',
    alignItems: 'center',
    width: PLUS_CONTAINER_SIZE,
    height: PLUS_CONTAINER_SIZE,
    backgroundColor: theme.colors.secondary,
    borderRadius: 40,
  },
}));

export default TabBar;
