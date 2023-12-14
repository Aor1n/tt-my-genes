import React from 'react';
import {RootStackComponent} from '../../navigation/types.ts';
import {SCREEN} from '../../navigation/consts.ts';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import getStylesHook from '../../helpers/getStylesHook.ts';
import Input from '../../components/Input.tsx';
import CloseIcon from '../../assets/icons/cross.svg';
import Button from '../../components/Button.tsx';
const ExpenseScreen: RootStackComponent<
  typeof SCREEN.EXPENSE_MODAL
> = props => {
  const id = props.route.params?.id;
  const {styles} = useStyles();

  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.closeIconContainer}>
        <TouchableOpacity onPress={goBack} style={styles.closeIcon}>
          <CloseIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.title}>{`${id ? 'Edit' : 'Create'} Expense`}</Text>
        <Input {...{[id ? 'label' : 'placeholder']: 'Title'}} />
        <Input
          {...{[id ? 'label' : 'placeholder']: 'Amount'}}
          keyboardType={'numeric'}
        />
        <Input {...{[id ? 'label' : 'placeholder']: 'Date'}} />
      </View>

      <View style={styles.button}>
        <Button
          title={id ? 'Edit' : 'Create'}
          isLoading={false}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 2,
    paddingHorizontal: 32,
  },
  closeIconContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
    marginRight: 18,
  },
  closeIcon: {
    padding: 7,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    marginBottom: 62,
  },
}));

export default ExpenseScreen;
