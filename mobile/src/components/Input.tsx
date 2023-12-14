import React from 'react';
import getStylesHook from '../helpers/getStylesHook.ts';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import useCustomTheme from '../hooks/useCustomTheme.ts';

interface InputProps extends TextInputProps {
  label?: string;
  isFullBordered?: boolean;
}

const Input = ({label, isFullBordered, ...rest}: InputProps) => {
  const {colors} = useCustomTheme();
  const {styles} = useStyles(isFullBordered);

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...rest}
        style={styles.input}
        placeholderTextColor={colors.textPlaceholder}
        spellCheck={false}
      />
    </View>
  );
};

const useStyles = getStylesHook<boolean>((theme, isFullBordered) => ({
  input: {
    height: 55,
    borderColor: isFullBordered ? theme.colors.primary : theme.colors.border,
    borderWidth: isFullBordered ? 1 : 0,
    borderBottomWidth: 1,
    borderRadius: 3,
    fontSize: 16,
    paddingLeft: isFullBordered ? 10 : 0,
    paddingTop: 20,
  },
  label: {
    textTransform: 'capitalize',
    marginTop: 27,
  },
}));
export default Input;
