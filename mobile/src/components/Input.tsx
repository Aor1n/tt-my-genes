import React from 'react';
import getStylesHook from '../helpers/getStylesHook.ts';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import useCustomTheme from '../hooks/useCustomTheme.ts';
import {FieldValues, Path, useController, UseFormReturn} from 'react-hook-form';

export type InputProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  isFullBordered?: boolean;
} & TextInputProps;
const Input = <T extends FieldValues>({
  form,
  name,
  label,
  isFullBordered,
  ...rest
}: InputProps<T>) => {
  const {colors} = useCustomTheme();
  const {styles} = useStyles(isFullBordered);

  const {field} = useController({
    name,
    control: form.control,
  });

  const error = form.formState.errors?.[name]?.message as string;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...rest}
        style={[styles.input, error ? styles.error : {}]}
        placeholderTextColor={colors.textPlaceholder}
        spellCheck={false}
        value={rest.value ?? field.value}
        onChangeText={field.onChange}
        onFocus={() => form.clearErrors(name)}
      />
      {error && (
        <Text style={[styles.errorContainer, styles.error]}>{error}</Text>
      )}
    </View>
  );
};

const useStyles = getStylesHook<boolean>((theme, isFullBordered) => ({
  container: {
    position: 'relative',
  },
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
  error: {
    color: theme.colors.error,
    borderColor: theme.colors.error,
  },
  errorContainer: {
    position: 'absolute',
    bottom: -18,
  },
}));
export default Input;
