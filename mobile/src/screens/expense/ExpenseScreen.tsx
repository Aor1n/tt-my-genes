import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackComponent} from 'navigation/types.ts';
import {SCREEN} from 'navigation/consts.ts';
import ExpenseForm from 'forms/expense/ExpenseForm.tsx';
import CloseIcon from 'assets/icons/cross.svg';
import getStylesHook from 'helpers/getStylesHook.ts';

const ExpenseScreen: RootStackComponent<
  typeof SCREEN.EXPENSE_MODAL
> = props => {
  const id = props.route.params?.id;
  const {styles} = useStyles();

  const {goBack} = useNavigation();

  return (
    <ExpenseForm id={id}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={goBack} style={styles.closeIcon}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    </ExpenseForm>
  );
};

const useStyles = getStylesHook(_ => ({
  closeIconContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
    marginRight: 18,
  },
  closeIcon: {
    padding: 7,
  },
}));

export default ExpenseScreen;
