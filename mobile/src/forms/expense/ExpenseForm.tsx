import React, {PropsWithChildren} from 'react';
import {Keyboard, Pressable, View} from 'react-native';
import useExpenseForm, {Expense} from 'forms/expense/useExpenseForm.ts';
import Input from 'components/inputs/Input.tsx';
import DatePickerInput from 'components/inputs/DatePickerInput.tsx';
import Button from 'components/buttons/Button.tsx';
import getStylesHook from 'utils/getStylesHook.ts';
import {useNavigation} from '@react-navigation/native';
import TextField from 'components/inputs/TextField.tsx';
import IS_IOS from 'consts/IS_IOS.ts';

import {KeyboardAvoidingView} from 'react-native-keyboard-controller';

interface ExpenseFormProps extends PropsWithChildren {
  expense?: Expense;
}

const ExpenseForm = ({expense, children}: ExpenseFormProps) => {
  const {styles} = useStyles();
  const {goBack} = useNavigation();
  const {form, handleSubmit} = useExpenseForm({
    expense,
    onSuccessfulSubmit: goBack,
    onErrorSubmit: goBack,
  });

  const id = expense?.id;

  return (
    <KeyboardAvoidingView
      style={styles.pressableContainer}
      keyboardVerticalOffset={24}
      behavior={IS_IOS ? 'padding' : 'height'}>
      <Pressable onPress={Keyboard.dismiss} style={styles.pressableContainer}>
        <View style={styles.container}>
          {children}
          <View style={styles.wrapper}>
            <TextField style={styles.title}>{`${
              id ? 'Edit' : 'Create'
            } Expense`}</TextField>
            <Input
              form={form}
              name={'title'}
              {...{[id ? 'label' : 'placeholder']: 'Title'}}
            />
            <Input
              form={form}
              name={'amount'}
              {...{[id ? 'label' : 'placeholder']: 'Amount'}}
              keyboardType={'numeric'}
            />

            <DatePickerInput
              form={form}
              name={'date'}
              {...{[id ? 'label' : 'placeholder']: 'Date'}}
              isValueAlwaysShown={!!id}
            />
          </View>

          <View style={styles.button}>
            <Button
              title={id ? 'Edit' : 'Create'}
              isLoading={false}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const useStyles = getStylesHook(_ => ({
  pressableContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 2,
    paddingHorizontal: 32,
  },
  closeIconContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
    marginRight: 18,
  },
  closeIcon: {
    padding: 7,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    marginBottom: 62,
  },
}));

export default ExpenseForm;
