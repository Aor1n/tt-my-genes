import React, {PropsWithChildren} from 'react';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import getStylesHook from 'utils/getStylesHook.ts';

interface ContainerProps extends PropsWithChildren {
  style?: SafeAreaViewProps['style'];
}

const Container = ({children, style}: ContainerProps) => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const useStyles = getStylesHook(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
}));

export default Container;
