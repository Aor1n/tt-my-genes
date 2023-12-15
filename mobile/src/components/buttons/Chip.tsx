import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import getStylesHook from 'helpers/getStylesHook.ts';

interface ChipProps extends PropsWithChildren {
  onPress: TouchableOpacityProps['onPress'];
}

const Chip = ({children}: ChipProps) => {
  const {styles} = useStyles();

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

const useStyles = getStylesHook(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.chip,
    width: 94,
    height: 28,
    borderRadius: 40,
  },
}));

export default Chip;
