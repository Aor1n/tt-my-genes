import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TabItem} from './TabItem.tsx';
import getStylesHook from '../../../helpers/getStylesHook.ts';
import {SCREEN} from '../../consts.ts';
import IS_IOS from '../../../consts/IS_IOS.ts';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import PlusIcon from '../../../assets/icons/plus.svg';

const TabBar = ({index}: {index: BottomTabBarProps['state']['index']}) => {
  const {bottom: bottomInsert} = useSafeAreaInsets();
  const {styles} = useStyles(bottomInsert);

  return (
    <View style={styles.container}>
      <TabItem
        info={{
          screen: SCREEN.HOME,
          key: 0,
        }}
        index={index}
      />
      <TouchableOpacity style={styles.plusContainer} activeOpacity={0.8}>
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

const useStyles = getStylesHook<number>((theme, bottomInsert = 20) => ({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: theme.colors.divider,
    paddingTop: bottomInsert,
    paddingBottom: bottomInsert + (IS_IOS ? 0 : 6),
  },
  plusContainer: {
    position: 'absolute',
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
