import React from 'react';
import {Text, TextProps} from 'react-native';
import getStylesHook from 'utils/getStylesHook.ts';

const TextField = (props: TextProps) => {
  const {styles} = useStyles();

  return (
    <Text style={[styles.text, props.style]} {...props}>
      {props.children}
    </Text>
  );
};

const useStyles = getStylesHook(_ => ({
  text: {
    fontFamily: 'Helvetica',
  },
}));

export default TextField;
