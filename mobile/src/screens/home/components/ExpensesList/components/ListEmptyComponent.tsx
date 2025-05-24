import React from 'react';
import getStylesHook from 'utils/getStylesHook.ts';
import TextField from 'components/inputs/TextField.tsx';
import Animated, {FadeOutUp} from 'react-native-reanimated';

const ListEmptyComponent = () => {
  const {styles} = useStyles();

  return (
    <Animated.View exiting={FadeOutUp}>
      <TextField style={styles.text}>No data for applied filters :(</TextField>
    </Animated.View>
  );
};

const useStyles = getStylesHook(_ => ({
  text: {
    marginTop: 20,
    marginHorizontal: 13,
    fontSize: 24,
  },
}));

export default ListEmptyComponent;
