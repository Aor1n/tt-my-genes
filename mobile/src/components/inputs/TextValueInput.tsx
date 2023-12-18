import React from 'react';
import {View} from 'react-native';
import getStylesHook from 'utils/getStylesHook.ts';
import TextField from 'components/inputs/TextField.tsx';

interface TextValueInputProps {
  text: string;
  value?: string | number;
}

const TextValueInput = ({text, value}: TextValueInputProps) => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <TextField style={styles.text}>{text}</TextField>
      {!!value && <TextField style={styles.value}>{value}</TextField>}
    </View>
  );
};

const useStyles = getStylesHook(theme => ({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.divider,
    marginBottom: 24,
    paddingBottom: 12,
  },
  text: {
    color: theme.colors.text,
    fontSize: 18,
  },
  value: {
    color: theme.colors.black,
    fontSize: 20,
    fontWeight: '700',
  },
}));

export default TextValueInput;
