import {TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';
import {DD_MM_YYYY} from 'consts/FORMAT.ts';
import React from 'react';
import {Expense} from 'forms/expense/useExpenseForm.ts';
import getStylesHook from 'utils/getStylesHook.ts';
import RemoveIcon from 'assets/icons/cross.svg';
import {useCbOnce} from 'hooks/useCbOnce.ts';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'navigation/consts.ts';
import useHandleExpenseRemove from 'screens/home/components/ExpensesList/components/useHandleExpenseRemove.ts';
import Animated from 'react-native-reanimated';
import useFadeInAnimation from 'hooks/useFadeInAnimation.ts';
import IS_IOS from 'consts/IS_IOS.ts';
import TextField from 'components/inputs/TextField.tsx';

export interface ParsedExpense extends Expense {
  isFirstDate: boolean;
  isSkippedDate: boolean;
  isBorderBottom: boolean;
}

const ExpensesListItem = ({item}: {item: ParsedExpense}) => {
  const {styles} = useStyles(item.isBorderBottom);
  const {navigate} = useNavigation();
  const {fadeInStyle} = useFadeInAnimation({duration: 250, delay: 120});

  const onRemovePress = useHandleExpenseRemove(item.id!);

  const onEditPress = useCbOnce(_ =>
    navigate({
      name: SCREEN.EXPENSE_MODAL,
      params: {expense: item},
    }),
  );

  return (
    <View style={styles.container}>
      {(item.isFirstDate || !item.isSkippedDate) && (
        <View style={styles.dateContainer}>
          <TextField>{format(new Date(item.date), DD_MM_YYYY)}</TextField>
        </View>
      )}
      <Animated.View style={fadeInStyle}>
        <TouchableOpacity style={styles.innerContainer} onPress={onEditPress}>
          <TouchableOpacity onPress={onRemovePress} style={styles.removeIcon}>
            <RemoveIcon />
          </TouchableOpacity>
          <TextField style={styles.title}>{item.title}</TextField>
          <View style={styles.amountContainer}>
            <TextField>${item.amount}</TextField>
          </View>
        </TouchableOpacity>
      </Animated.View>
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
    borderBottomWidth: isBorderBottom && IS_IOS ? 0.5 : 0,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,
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
