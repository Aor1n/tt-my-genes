import React from 'react';
import getStylesHook from 'utils/getStylesHook.ts';
import TextField from 'components/inputs/TextField.tsx';

const ListEmptyComponent = () => {
  const {styles} = useStyles();

  return (
    <TextField style={styles.text}>No data for applied filters :(</TextField>
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
