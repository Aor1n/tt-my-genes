import React from 'react';
import {View} from 'react-native';
import Chip from 'components/buttons/Chip.tsx';
import SlidersIcon from 'assets/icons/sliders.svg';
import getStylesHook from 'utils/getStylesHook.ts';
import {useAppSelector} from 'store/hooks.ts';
import {useAppModalSelector} from 'hooks/selectors/useAppModalSelector.ts';
import FiltersBottomSheet from 'screens/home/components/Filters/components/FiltersBottomSheet.tsx';
import TextField from 'components/inputs/TextField.tsx';

const Filters = () => {
  const {styles} = useStyles();
  const totalExpenses = useAppSelector(state => state.expenses.totalExpenses);
  const {toggleIsModalShown} = useAppModalSelector();

  return (
    <View style={styles.container}>
      <TextField style={styles.totalExpenses}>
        Total expenses: ${totalExpenses}
      </TextField>
      <View style={styles.filtersContainer}>
        <Chip onPress={toggleIsModalShown}>
          <SlidersIcon />
          <TextField style={styles.filtersText}>Filters</TextField>
        </Chip>
      </View>
      <FiltersBottomSheet />
    </View>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    marginTop: 10,
    marginBottom: 12,
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
    marginLeft: 11,
  },
}));

export default Filters;
