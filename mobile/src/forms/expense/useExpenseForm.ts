import {useForm, UseFormHandleSubmit, UseFormReturn} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import useFillEditForm from 'forms/expense/useFillEditForm.ts';

const expenseSchema = z.object({
  id: z.string().uuid().nullish(),
  title: z.string().min(2).max(20).trim(),
  amount: z.union([z.string(), z.number()]).pipe(z.coerce.number()),
  date: z.union([z.coerce.date(), z.string()]),
});

export type Expense = z.infer<typeof expenseSchema>;

interface UseExpenseProps {
  expense?: Expense;
  onSuccessfulSubmit: () => void;
}

interface UseExpenseReturn {
  form: UseFormReturn<Expense>;
  handleSubmit: ReturnType<UseFormHandleSubmit<Expense>>;
}

export default function useExpenseForm({
  expense,
  onSuccessfulSubmit,
}: UseExpenseProps): UseExpenseReturn {
  const defaultValues = {
    date: new Date(),
  };

  const form = useForm<Expense>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(expenseSchema),
  });

  useFillEditForm({expense, form});

  const handleSubmit = async (formValues: Expense) => {
    try {
      console.log('formValues', formValues);
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
