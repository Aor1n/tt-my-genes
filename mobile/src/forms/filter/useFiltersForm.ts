import {useForm, UseFormHandleSubmit, UseFormReturn} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {formatISO} from 'date-fns/fp';
import useExpenses from 'hooks/query/useExpenses.ts';

const filtersSchema = z.object({
  title: z.string().min(2).max(20).trim(),
  date: z.union([z.coerce.date(), z.string()]),
});

type Filter = z.infer<typeof filtersSchema>;

interface UseFilterProps {
  onSuccessfulSubmit: () => void;
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

  const {fetchExpenses} = useExpenses();

  const handleSubmit = async (formValues: Filter) => {
    const values = {
      ...formValues,
      date: formatISO(formValues.date as Date),
    };
    try {
      await fetchExpenses(values);
      onSuccessfulSubmit();
    } catch (e) {
      //
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
}
