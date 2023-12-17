import React from 'react';
import {FlatList} from 'react-native';
import ExpensesListItem, {
  ParsedExpense,
} from 'screens/home/components/ExpensesList/components/ExpensesListItem.tsx';
import useUIExpenses from 'screens/home/components/ExpensesList/hooks/useUIExpenses.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';
import ListEmptyComponent from 'screens/home/components/ExpensesList/components/ListEmptyComponent.tsx';

const ExpensesList = () => {
  const uiExpenses = useUIExpenses();

  const RenderExpensesListItem = useCbOnce(({item}: {item: ParsedExpense}) => {
    return <ExpensesListItem item={item} />;
  });

  return (
    <FlatList
      data={uiExpenses}
      keyExtractor={item => item.id!.toString()}
      renderItem={RenderExpensesListItem}
      initialNumToRender={10}
      updateCellsBatchingPeriod={1000}
      maxToRenderPerBatch={12}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default ExpensesList;
