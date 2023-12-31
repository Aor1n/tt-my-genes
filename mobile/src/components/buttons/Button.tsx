import React from 'react';

import {ActivityIndicator, View} from 'react-native';
import TouchableScaleView, {
  TouchableScaleViewProps,
} from 'components/containers/TouchableScaleView.tsx';
import getStylesHook from 'utils/getStylesHook.ts';
import TextField from 'components/inputs/TextField.tsx';

interface ButtonProps extends TouchableScaleViewProps {
  title: string;
  isLoading: boolean;
}

const Button = ({title, isLoading, ...rest}: ButtonProps) => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <TouchableScaleView {...rest} style={styles.wrapper}>
        {isLoading && (
          <ActivityIndicator color={'white'} style={styles.loading} />
        )}

        <TextField style={styles.text}>{title}</TextField>
      </TouchableScaleView>
    </View>
  );
};

const PADDING_HORIZONTAL = 52;

const useStyles = getStylesHook(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 49,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  loading: {
    position: 'absolute',
    left: PADDING_HORIZONTAL / 2.5,
  },
}));

export default Button;
