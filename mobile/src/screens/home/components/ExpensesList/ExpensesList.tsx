import React, {useMemo} from 'react';
import {FlatList} from 'react-native';
import {useAppSelector} from 'store/hooks.ts';

import ExpensesListItem from 'screens/home/components/ExpensesList/components/ExpensesListItem.tsx';

const ExpensesList = () => {
  const expenses = useAppSelector(state => state.expenses.items);

  // todo replace to its own hook
  const newExpenses = useMemo(
    () =>
      expenses.map((expense, index) => {
        const isSkippedDate = expenses[index - 1]?.date === expense.date;
        const isLastItem = !expenses.at(index + 1);
        return {
          ...expense,
          isSkippedDate,
          isLastItem,
        };
      }),
    [expenses],
  );

  return (
    <FlatList
      data={newExpenses}
      renderItem={({item}) => <ExpensesListItem item={item} />}
    />
  );
};

export default ExpensesList;
