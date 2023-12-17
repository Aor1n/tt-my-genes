import {useMemo} from 'react';
import {Expense} from 'forms/expense/useExpenseForm.ts';
import {useAppSelector} from 'store/hooks.ts';

const useUIExpenses = () => {
  const expenses: Expense[] = useAppSelector(state => state.expenses.items);

  return useMemo(
    () =>
      expenses?.map((expense, index) => {
        const isSkippedDate = expenses[index - 1]?.date === expense.date;
        const isBorderBottom = expenses[index + 1]?.date === expense.date;
        return {
          ...expense,
          isSkippedDate,
          isBorderBottom,
        };
      }),
    [expenses],
  );
};

export default useUIExpenses;
