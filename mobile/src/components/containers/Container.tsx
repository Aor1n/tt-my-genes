import React, {PropsWithChildren} from 'react';
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import getStylesHook from 'utils/getStylesHook.ts';
import {DimensionValue, View} from 'react-native';

interface ContainerProps extends PropsWithChildren {
  style?: SafeAreaViewProps['style'];
}

const Container = ({children, style}: ContainerProps) => {
  const {top} = useSafeAreaInsets();
  const {styles} = useStyles(top);
  return <View style={[styles.container, style]}>{children}</View>;
};

const useStyles = getStylesHook<DimensionValue | undefined>(
  (theme, paddingTop) => ({
    container: {
      flex: 1,
      paddingTop,
      backgroundColor: theme.colors.bg,
    },
  }),
);

export default Container;
