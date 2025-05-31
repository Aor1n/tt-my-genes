import {TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';
import {DD_MM_YYYY} from 'consts/FORMAT.ts';
import React, {useCallback} from 'react';
import getStylesHook from 'utils/getStylesHook.ts';
import RemoveIcon from 'assets/icons/cross.svg';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'navigation/consts.ts';
import useHandleExpenseRemove from 'screens/home/components/ExpensesList/components/useHandleExpenseRemove.ts';
import Animated, {FadeInDown, FadeOutUp} from 'react-native-reanimated';
import IS_IOS from 'consts/IS_IOS.ts';
import TextField from 'components/inputs/TextField.tsx';
import useUIExpenses from 'screens/home/components/ExpensesList/hooks/useUIExpenses.ts';

interface ExpensesListItemProps {
  item: ReturnType<typeof useUIExpenses>[number];
  index: number;
}

const ExpensesListItem = ({item, index}: ExpensesListItemProps) => {
  const hasDate = item.isFirstDate || !item.isSkippedDate;
  const {styles} = useStyles(item.isBorderBottom);
  const {navigateDeprecated} = useNavigation();

  const onRemovePress = useHandleExpenseRemove(item.id);

  const onEditPress = useCallback(
    () =>
      navigateDeprecated({
        name: SCREEN.EXPENSE_MODAL,
        params: {expense: item},
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item],
  );

  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.delay(60 * index)}
      exiting={FadeOutUp}>
      {hasDate && (
        <View style={styles.dateContainer}>
          <TextField>{format(new Date(item.date), DD_MM_YYYY)}</TextField>
        </View>
      )}
      <View>
        <TouchableOpacity style={styles.innerContainer} onPress={onEditPress}>
          <TouchableOpacity onPress={onRemovePress} style={styles.removeIcon}>
            <RemoveIcon />
          </TouchableOpacity>
          <TextField style={styles.title}>{item.title}</TextField>
          <View style={styles.amountContainer}>
            <TextField>${item.amount}</TextField>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const useStyles = getStylesHook((theme, isBorderBottom) => ({
  container: {
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

export default React.memo(ExpensesListItem);
