import {useEffectOnce} from 'hooks/useEffectOnce.ts';
import {UseFormReturn} from 'react-hook-form';
import {Expense} from 'forms/expense/useExpenseForm.ts';
import {useAppSelector} from 'store/hooks.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';

interface UseFillEditForm {
  form: UseFormReturn<Expense>;
  id: string;
}

const useFillEditForm = ({form, id}: UseFillEditForm) => {
  const expenses: Expense[] = useAppSelector(state => state.expenses.items);

  const fillProfileFields = useCbOnce(() => {
    const expense: Expense = expenses.find(i => i.id === id)!;

    form.setValue('title', expense.title);
    form.setValue('date', new Date(expense.date));
    form.setValue('amount', expense.amount);
  });

  useEffectOnce(() => {
    fillProfileFields();
  });
};

export default useFillEditForm;
