import React from 'react';
import {View} from 'react-native';
import Input from 'components/inputs/Input.tsx';
import DatePickerInput from 'components/inputs/DatePickerInput.tsx';
import useFiltersForm from 'forms/filter/useFiltersForm.ts';
import Button from 'components/buttons/Button.tsx';
import {useAppModalSelector} from 'hooks/selectors/useAppModalSelector.ts';
import getStylesHook from 'helpers/getStylesHook.ts';

const FiltersForm = () => {
  const {styles} = useStyles();
  const {setIsModalShown} = useAppModalSelector();
  const {form, handleSubmit} = useFiltersForm({
    onSuccessfulSubmit: () => {
      form.reset();
      setIsModalShown(false);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Input form={form} name={'title'} label={'Title'} />
        <DatePickerInput form={form} name={'date'} label={'Date'} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Filter'} isLoading={false} onPress={handleSubmit} />
      </View>
    </View>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 23,
    paddingRight: 23,
  },
  inputs: {
    paddingRight: 20,
  },
  buttonContainer: {
    marginBottom: 42,
  },
}));

export default FiltersForm;
