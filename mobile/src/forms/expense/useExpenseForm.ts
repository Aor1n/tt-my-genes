import {useForm, UseFormHandleSubmit, UseFormReturn} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import useNetwork from 'hooks/useNetwork.ts';
import {notify} from 'utils/notify.ts';
import useExpenses from 'hooks/query/useExpenses.ts';

const expenseSchema = z.object({
  id: z.string().uuid().or(z.number()).nullish(),
  title: z.string().min(2).max(20).trim(),
  amount: z.string().min(1, 'Minimum amount is 0$'),
  date: z.union([z.coerce.date(), z.string()]),
});

export type Expense = z.infer<typeof expenseSchema>;

interface UseExpenseProps {
  expense?: Expense;
  onSuccessfulSubmit: () => void;
  onErrorSubmit: () => void;
}

interface UseExpenseReturn {
  form: UseFormReturn<Expense>;
  handleSubmit: ReturnType<UseFormHandleSubmit<Expense>>;
}

export default function useExpenseForm({
  expense,
  onSuccessfulSubmit,
  onErrorSubmit,
}: UseExpenseProps): UseExpenseReturn {
  const defaultValues = expense
    ? {...expense, date: new Date(expense.date)}
    : {
        title: '',
        amount: '',
        date: new Date(),
      };
  const form = useForm<Expense>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(expenseSchema),
  });

  const {createExpense, editExpense} = useNetwork();

  const {fetchExpenses} = useExpenses();

  const handleSubmit = async (formValues: Expense) => {
    try {
      const isEditForm = !!formValues.id;
      if (isEditForm) {
        await editExpense(formValues);
      } else {
        await createExpense(formValues);
      }

      notify({
        type: 'success',
        title: 'Success!',
        description: `Expense has been ${isEditForm ? 'edited' : 'created'}`,
      });

      await fetchExpenses();

      onSuccessfulSubmit();
    } catch (e) {
      onErrorSubmit();
    }
  };

  return {
    form,
    handleSubmit: form.handleSubmit(handleSubmit),
  };
}
