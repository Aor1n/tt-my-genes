import {useForm, UseFormHandleSubmit, UseFormReturn} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import useExpenses from 'hooks/query/useExpenses.ts';
import useFiltersSelector from 'hooks/selectors/useFiltersSelector.ts';
import {format} from 'date-fns';
import {YYYY_MM_DD} from 'consts/FORMAT.ts';

const filtersSchema = z.object({
  title: z.string().max(20).trim(),
  date: z.union([z.coerce.date(), z.string()]),
});

type Filter = z.infer<typeof filtersSchema>;

interface UseFilterProps {
  onSuccessfulSubmit: (arg: Filter) => void;
}

interface UseFilterReturn {
  form: UseFormReturn<Filter>;
  handleSubmit: ReturnType<UseFormHandleSubmit<Filter>>;
}

export default function useFiltersForm({
  onSuccessfulSubmit,
}: UseFilterProps): UseFilterReturn {
  const form = useForm<Filter>({
    defaultValues: {
      title: '',
      date: new Date(),
    },
    mode: 'onSubmit',
    resolver: zodResolver(filtersSchema),
  });

  const {setFilters} = useFiltersSelector();

  const {fetchExpenses} = useExpenses();

  const handleSubmit = async (formValues: Filter) => {
    const {isDirty} = form.getFieldState('date');
    const date = isDirty ? format(new Date(formValues.date), YYYY_MM_DD) : '';

    const values = {
      ...formValues,
      date,
    };

    setFilters(values);

    try {
      await fetchExpenses(values);
      onSuccessfulSubmit(values);
    } catch (e) {
      //
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
}
