import {Text, TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';
import {DD_MM_YYYY} from 'consts/FORMAT.ts';
import React from 'react';
import {Expense} from 'forms/expense/useExpenseForm.ts';
import getStylesHook from 'helpers/getStylesHook.ts';
import RemoveIcon from 'assets/icons/cross.svg';

export interface ParsedExpense extends Expense {
  isSkippedDate: boolean;
  isLastItem: boolean;
}

const ExpensesListItem = ({item}: {item: ParsedExpense}) => {
  const isBorderBottom = !item.isSkippedDate && !item.isLastItem;
  const {styles} = useStyles(isBorderBottom);

  return (
    <View style={styles.container}>
      {!item.isSkippedDate && (
        <View style={styles.dateContainer}>
          <Text>{format(new Date(item.date), DD_MM_YYYY)}</Text>
        </View>
      )}
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => console.log(item.id)}
          style={styles.removeIcon}>
          <RemoveIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.amountContainer}>
          <Text>${item.amount}</Text>
        </View>
      </View>
    </View>
  );
};

export const EXPENSE_ITEM_LIST_HEIGHT = 74;

const useStyles = getStylesHook<boolean>((theme, isBorderBottom) => ({
  container: {
    maxHeight: EXPENSE_ITEM_LIST_HEIGHT,
    backgroundColor: theme.colors.white,
  },
  dateContainer: {
    backgroundColor: theme.colors.beige,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: theme.colors.black,
    borderBottomWidth: isBorderBottom ? 0.5 : 0,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  removeIcon: {
    padding: 4,
  },
  title: {
    marginLeft: 30,
  },
  amountContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
}));

export default ExpensesListItem;
