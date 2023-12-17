import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RootStackComponent} from 'navigation/types.ts';
import {SCREEN} from 'navigation/consts.ts';
import Container from 'components/containers/Container.tsx';
import TextValueInput from 'components/inputs/TextValueInput.tsx';
import getStylesHook from 'utils/getStylesHook.ts';
import {useAppDispatch, useAppSelector} from 'store/hooks.ts';
import {clearProfile} from 'store/actions/profile.ts';

const ProfileScreen: RootStackComponent<typeof SCREEN.PROFILE> = () => {
  const {styles} = useStyles();
  const dispatch = useAppDispatch();
  const totalExpensesItems = useAppSelector(
    state => state.expenses.totalExpensesItems,
  );

  const signOut = () => {
    dispatch(clearProfile());
  };

  return (
    <Container style={styles.container}>
      <TextValueInput
        text={'Total Expenses Items'}
        value={totalExpensesItems}
      />

      <TouchableOpacity onPress={signOut}>
        <TextValueInput text={'Sign out'} />
      </TouchableOpacity>
    </Container>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
}));

export default ProfileScreen;
