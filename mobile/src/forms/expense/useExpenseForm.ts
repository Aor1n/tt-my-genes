import {useForm, UseFormHandleSubmit, UseFormReturn} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import useFillEditForm from 'forms/expense/useFillEditForm.ts';
import useNetwork from 'hooks/useNetwork.ts';
import Toast from 'react-native-toast-message';

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
  const defaultValues = {
    title: '',
    amount: 0,
    date: new Date(),
  };

  const form = useForm<Expense>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(expenseSchema),
  });

  const {createExpense, editExpense} = useNetwork();

  useFillEditForm({expense, form});

  const handleSubmit = async (formValues: Expense) => {
    try {
      const isEditForm = !!expense?.id;
      if (isEditForm) {
        await editExpense(formValues);
      } else {
        await createExpense(formValues);
      }

      Toast.show({
        type: 'success',
        text1: 'Success!',
        text2: `Expense has been ${isEditForm ? 'edited' : 'created'}`,
      });

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
