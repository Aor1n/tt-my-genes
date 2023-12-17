import {useMemo} from 'react';
import {Expense} from 'forms/expense/useExpenseForm.ts';
import {useAppSelector} from 'store/hooks.ts';
import {isSameDayHelper} from 'utils/isSameDayHelper.ts';

const useUIExpenses = () => {
  const expenses: Expense[] = useAppSelector(state => state.expenses.items);

  return useMemo(
    () =>
      expenses?.map((expense, index) => {
        const isFirstDate = !expenses[index - 1]?.date;
        const isSkippedDate = isSameDayHelper(
          expenses[index - 1]?.date,
          expense.date,
        );
        const isBorderBottom = isSameDayHelper(
          expenses[index + 1]?.date,
          expense.date,
        );
        return {
          ...expense,
          isFirstDate,
          isSkippedDate,
          isBorderBottom,
        };
      }),
    [expenses],
  );
};

export default useUIExpenses;
