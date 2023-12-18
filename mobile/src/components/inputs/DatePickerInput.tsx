import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity, View} from 'react-native';
import {FieldValues, Path, useController, UseFormReturn} from 'react-hook-form';
import {format} from 'date-fns';
import Input, {InputProps} from 'components/inputs/Input.tsx';
import {DD_MM_YYYY} from 'consts/FORMAT.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';

type DatePickerInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  isValueAlwaysShown?: boolean;
} & InputProps<T>;

const DatePickerInput = <T extends FieldValues>({
  form,
  name,
  isValueAlwaysShown,
  ...rest
}: DatePickerInputProps<T>) => {
  const [open, setOpen] = useState(false);
  const {
    field,
    fieldState: {isDirty},
  } = useController({
    name,
    control: form.control,
  });
  const {handleDatePickerFirstState} = useDatePickerFirstStateHack(
    field.onChange,
    isDirty,
  );

  const valueToDisplay =
    isDirty || isValueAlwaysShown ? format(field.value, DD_MM_YYYY) : '';

  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={() => setOpen(true)}>
        <Input
          form={form}
          name={name}
          value={valueToDisplay}
          editable={false}
          pointerEvents={'none'}
          {...rest}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        mode={'date'}
        date={field.value}
        onConfirm={date => {
          field.onChange(date);
          handleDatePickerFirstState();
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

function useDatePickerFirstStateHack(
  onChangeField: (date: Date) => void,
  isDirty: boolean,
) {
  const [isConfirmedOnce, setIsConfirmedOnce] = useState(false);
  useEffect(() => {
    // NOTE: smelly code due to DatePicker limitations.
    // Actual behaviour: if we confirm initial(!) date - it won't set field as dirty.
    // Expected behaviour: user must be able to pick initial date.
    // We have to rely on this hack because the "DatePicker.date" prop is required. In this case we
    // can't set anything other than "new Date()" as the initial value.
    // That means we apply the "date" filter on initial render. Here comes our "isDirty" field check.
    // By setting "new Date()" we are trigger "isDirty: true".
    // Conclusion: if the user wants to choose the initial date as the filter date - we have to use this hack.

    if (!isDirty && isConfirmedOnce) {
      // sets first value on "DatePicker" press
      onChangeField(new Date());
    }

    if (isDirty) {
      // resets value on "clean" press
      setIsConfirmedOnce(false);
    }
  }, [isConfirmedOnce, isDirty, onChangeField]);

  const handleDatePickerFirstState = useCbOnce(() => {
    // sets value on "DatePicker" press
    if (isDirty) {
      setIsConfirmedOnce(false);
    } else {
      setIsConfirmedOnce(true);
    }
  });

  return {isConfirmedOnce, setIsConfirmedOnce, handleDatePickerFirstState};
}

export default DatePickerInput;
