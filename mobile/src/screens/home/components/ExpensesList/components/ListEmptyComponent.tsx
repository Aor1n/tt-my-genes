import React from 'react';
import {Text} from 'react-native';
import getStylesHook from 'utils/getStylesHook.ts';

const ListEmptyComponent = () => {
  const {styles} = useStyles();

  return <Text style={styles.text}>No data for applied filters :(</Text>;
};

const useStyles = getStylesHook(_ => ({
  text: {
    marginTop: 20,
    marginHorizontal: 13,
    fontSize: 24,
  },
}));

export default ListEmptyComponent;
