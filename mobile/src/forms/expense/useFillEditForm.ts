import {useEffectOnce} from 'hooks/useEffectOnce.ts';
import {UseFormReturn} from 'react-hook-form';
import {Expense} from 'forms/expense/useExpenseForm.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';

interface UseFillEditForm {
  form: UseFormReturn<Expense>;
  expense?: Expense;
}

const useFillEditForm = ({form, expense}: UseFillEditForm) => {
  const fillProfileFields = useCbOnce(() => {
    if (!expense) {
      return;
    }

    form.setValue('title', expense.title);
    form.setValue('date', new Date(expense.date));
    form.setValue('amount', expense.amount);
  });

  useEffectOnce(() => {
    fillProfileFields();
  });
};

export default useFillEditForm;
