import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity, View} from 'react-native';
import {FieldValues, Path, useController, UseFormReturn} from 'react-hook-form';
import {format} from 'date-fns';
import Input, {InputProps} from 'components/Input.tsx';
import {DD_MM_YYYY} from 'consts/FORMAT.ts';

type DatePickerInputProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
} & InputProps<T>;

const DatePickerInput = <T extends FieldValues>({
  form,
  name,
  ...rest
}: DatePickerInputProps<T>) => {
  const [initDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const {field} = useController({
    name,
    control: form.control,
  });

  const formattedDate = String(format(field.value ?? initDate, DD_MM_YYYY));

  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={() => setOpen(true)}>
        <Input
          form={form}
          name={name}
          value={formattedDate}
          editable={false}
          pointerEvents={'none'}
          {...rest}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        mode={'date'}
        date={initDate}
        onConfirm={date => {
          setOpen(false);
          field.onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DatePickerInput;
