import useNetwork from 'hooks/useNetwork.ts';
import {useAppDispatch} from 'store/hooks.ts';
import {setExpenses} from 'store/actions/expenses.ts';
import useFiltersSelector from 'hooks/selectors/useFiltersSelector.ts';
import {useCallback} from 'react';

const useExpenses = () => {
  const {getExpenses} = useNetwork();
  const dispatch = useAppDispatch();
  const {filters} = useFiltersSelector();

  const fetchExpenses = useCallback(
    async (localFilters?: typeof filters) => {
      const data = await getExpenses(localFilters ?? {});
      dispatch(setExpenses(data));
    },
    [dispatch, getExpenses],
  );

  return {fetchExpenses};
};

export default useExpenses;
