import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Input from 'components/inputs/Input.tsx';
import DatePickerInput from 'components/inputs/DatePickerInput.tsx';
import useFiltersForm from 'forms/filter/useFiltersForm.ts';
import Button from 'components/buttons/Button.tsx';
import {useAppModalSelector} from 'hooks/selectors/useAppModalSelector.ts';
import getStylesHook from 'utils/getStylesHook.ts';
import CloseIcon from 'assets/icons/cross.svg';
import {notify} from 'utils/notify.ts';
import useHandleCleanPress from 'forms/filter/useHandleCleanPress.ts';

const FiltersForm = () => {
  const {styles} = useStyles();
  const {hideModal} = useAppModalSelector();
  const {form, handleSubmit} = useFiltersForm({
    onSuccessfulSubmit: () => {
      hideModal();
      notify({
        type: 'success',
        description: 'Data was filtered',
      });
    },
  });

  const onCleanPress = useHandleCleanPress({resetForm: form.reset});

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onCleanPress}>
          <Text style={styles.cleanText}>clean</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Filters</Text>
        <TouchableOpacity style={styles.closeIcon} onPress={hideModal}>
          <CloseIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputs}>
          <Input form={form} name={'title'} label={'Title'} />
          <DatePickerInput form={form} name={'date'} label={'Date'} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={'Filter'} isLoading={false} onPress={handleSubmit} />
      </View>
    </View>
  );
};

const useStyles = getStylesHook(theme => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 23,
    paddingRight: 23,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 33.5,
  },
  header: {
    fontSize: 20,
  },
  cleanText: {
    color: theme.colors.secondary,
    fontSize: 16,
  },
  closeIcon: {
    padding: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputs: {
    paddingRight: 20,
  },
  buttonContainer: {
    marginBottom: 42,
  },
}));

export default FiltersForm;
