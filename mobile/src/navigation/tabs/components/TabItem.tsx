import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'navigation/consts.ts';
import {BottomTabNavigation} from 'navigation/types.ts';
import getStylesHook from 'utils/getStylesHook.ts';
import TextField from 'components/inputs/TextField.tsx';

export interface TabItemProps {
  info: {
    screen: SCREEN.HOME | SCREEN.PROFILE;
    key: number;
  };
  index: BottomTabBarProps['state']['index'];
}

export const TabItem = React.memo(
  ({info, index}: TabItemProps) => {
    const {navigateDeprecated} = useNavigation<BottomTabNavigation>();
    const isFocused = index === info.key;
    const {styles} = useStyles(isFocused);

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigateDeprecated(info.screen)}>
        <TextField style={styles.text}>{info.screen}</TextField>
      </TouchableOpacity>
    );
  },
  (prev, next) => prev.index === next.index,
);

const useStyles = getStylesHook<boolean>((theme, isFocused) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: isFocused ? theme.colors.primary : theme.colors.grey,
    fontSize: 13,
    textTransform: 'capitalize',
  },
}));
