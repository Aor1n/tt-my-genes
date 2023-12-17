import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import useExpenseForm, {Expense} from 'forms/expense/useExpenseForm.ts';
import Input from 'components/inputs/Input.tsx';
import DatePickerInput from 'components/inputs/DatePickerInput.tsx';
import Button from 'components/buttons/Button.tsx';
import getStylesHook from 'helpers/getStylesHook.ts';
import {useNavigation} from '@react-navigation/native';

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
    <View style={styles.container}>
      {children}

      <View style={styles.wrapper}>
        <Text style={styles.title}>{`${id ? 'Edit' : 'Create'} Expense`}</Text>
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
  );
};

const useStyles = getStylesHook(_ => ({
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
