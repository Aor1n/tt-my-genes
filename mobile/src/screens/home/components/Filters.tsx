import React from 'react';
import {Text, View} from 'react-native';
import Chip from 'components/buttons/Chip.tsx';
import SlidersIcon from 'assets/icons/sliders.svg';
import getStylesHook from 'helpers/getStylesHook.ts';
import {useAppSelector} from 'store/hooks.ts';

const Filters = () => {
  const {styles} = useStyles();
  const totalExpenses = useAppSelector(state => state.expenses.totalExpenses);
  return (
    <View style={styles.container}>
      <Text style={styles.totalExpenses}>Total expenses: ${totalExpenses}</Text>
      <View style={styles.filtersContainer}>
        <Chip onPress={() => {}}>
          <SlidersIcon />
          <Text style={styles.filtersText}>Filters</Text>
        </Chip>
      </View>
    </View>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    marginTop: 30,
    paddingHorizontal: 13,
  },
  totalExpenses: {
    fontSize: 13,
  },
  filtersContainer: {
    alignItems: 'flex-end',
    marginTop: 37,
  },
  filtersText: {
    fontSize: 12,
    fontWeight: '700',
  },
}));

export default Filters;
