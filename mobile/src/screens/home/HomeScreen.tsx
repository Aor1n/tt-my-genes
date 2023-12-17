import React from 'react';
import {View} from 'react-native';
import {RootStackComponent} from 'navigation/types.ts';
import {SCREEN} from 'navigation/consts.ts';
import Container from 'components/containers/Container.tsx';
import getStylesHook from 'utils/getStylesHook.ts';
import Filters from 'screens/home/components/Filters/Filters.tsx';
import ExpensesList from 'screens/home/components/ExpensesList/ExpensesList.tsx';
import useExpenses from 'hooks/query/useExpenses.ts';
import ProfileName from 'screens/home/components/ProfileName.tsx';
import {useEffectOnce} from 'hooks/useEffectOnce.ts';

const HomeScreen: RootStackComponent<typeof SCREEN.HOME> = () => {
  const {styles} = useStyles();
  const {fetchExpenses} = useExpenses();

  useEffectOnce(() => {
    (async () => await fetchExpenses())();
  });

  return (
    <View style={styles.wrapper}>
      <ProfileName />
      <Container>
        <Filters />
        <ExpensesList />
      </Container>
    </View>
  );
};

const useStyles = getStylesHook(theme => ({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
}));

export default HomeScreen;
