import useNetwork from 'hooks/useNetwork.ts';
import {useAppDispatch} from 'store/hooks.ts';
import {setExpenses} from 'store/actions/expenses.ts';
import {useCallback, useEffect} from 'react';

const useExpenses = () => {
  const {getExpenses} = useNetwork();
  const dispatch = useAppDispatch();

  const fetchExpenses = useCallback(
    async (filters: Record<string, string> = {}) => {
      const data = await getExpenses(filters);

      dispatch(setExpenses(data));
    },
    [dispatch, getExpenses],
  );

  useEffect(() => {
    fetchExpenses().catch(() => {
      //
    });
  }, [fetchExpenses]);

  return {fetchExpenses};
};

export default useExpenses;
