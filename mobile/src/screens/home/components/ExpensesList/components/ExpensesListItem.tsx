import {Text, TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';
import {DD_MM_YYYY} from 'consts/FORMAT.ts';
import React from 'react';
import {Expense} from 'forms/expense/useExpenseForm.ts';
import getStylesHook from 'helpers/getStylesHook.ts';
import RemoveIcon from 'assets/icons/cross.svg';
import useNetwork from 'hooks/useNetwork.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'navigation/consts.ts';

export interface ParsedExpense extends Expense {
  isSkippedDate: boolean;
  isLastItem: boolean;
}

const ExpensesListItem = ({item}: {item: ParsedExpense}) => {
  const isBorderBottom = !item.isSkippedDate && !item.isLastItem;
  const {styles} = useStyles(isBorderBottom);
  const {deleteExpense} = useNetwork();
  const {navigate} = useNavigation();

  const onEditPress = useCbOnce(_ =>
    navigate({
      name: SCREEN.EXPENSE_MODAL,
      params: {expense: item},
    }),
  );

  const onRemovePress = useCbOnce(_ => deleteExpense(item.id));

  return (
    <View style={styles.container}>
      {!item.isSkippedDate && (
        <View style={styles.dateContainer}>
          <Text>{format(new Date(item.date), DD_MM_YYYY)}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.innerContainer} onPress={onEditPress}>
        <TouchableOpacity onPress={onRemovePress} style={styles.removeIcon}>
          <RemoveIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.amountContainer}>
          <Text>${item.amount}</Text>
        </View>
      </TouchableOpacity>
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
    marginTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 14,
  },
  removeIcon: {
    padding: 6,
  },
  title: {
    marginLeft: 28,
  },
  amountContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
}));

export default ExpensesListItem;
