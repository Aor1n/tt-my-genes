import React from 'react';
import {Keyboard, Pressable, TouchableOpacity, View} from 'react-native';
import Input from 'components/inputs/Input.tsx';
import DatePickerInput from 'components/inputs/DatePickerInput.tsx';
import useFiltersForm from 'forms/filter/useFiltersForm.ts';
import Button from 'components/buttons/Button.tsx';
import {useAppModalSelector} from 'hooks/selectors/useAppModalSelector.ts';
import getStylesHook from 'utils/getStylesHook.ts';
import CloseIcon from 'assets/icons/cross.svg';
import {notify} from 'utils/notify.ts';
import useHandleCleanPress from 'forms/filter/useHandleCleanPress.ts';
import TextField from 'components/inputs/TextField.tsx';
import {parseForEmptyValues} from 'utils/parseForEmptyValues.ts';

const FiltersForm = () => {
  const {styles} = useStyles();
  const {hideModal} = useAppModalSelector();
  const {form, handleSubmit} = useFiltersForm({
    onSuccessfulSubmit: rawFilters => {
      hideModal();
      const appliedFilters = Object.keys(parseForEmptyValues(rawFilters));
      const description =
        appliedFilters.length === 0
          ? 'Data has been fetched'
          : `Data has been filtered by ${appliedFilters.join(', ')}`;
      notify({
        type: 'success',
        description,
      });
    },
  });

  const onCleanPress = useHandleCleanPress({resetForm: form.reset});

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.pressableContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={onCleanPress}>
            <TextField style={styles.cleanText}>clean</TextField>
          </TouchableOpacity>
          <TextField style={styles.header}>Filters</TextField>
          <TouchableOpacity style={styles.closeIcon} onPress={hideModal}>
            <CloseIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputs}>
            <Input form={form} name={'title'} label={'Title'} />
            <Input form={form} name={'amount'} label={'Amount'} />
            <DatePickerInput form={form} name={'date'} label={'Date'} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Filter'} isLoading={false} onPress={handleSubmit} />
        </View>
      </View>
    </Pressable>
  );
};

const useStyles = getStylesHook(theme => ({
  pressableContainer: {
    flex: 1,
  },
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
