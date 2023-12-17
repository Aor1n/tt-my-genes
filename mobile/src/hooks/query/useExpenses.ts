import useNetwork from 'hooks/useNetwork.ts';
import {useAppDispatch} from 'store/hooks.ts';
import {setExpenses} from 'store/actions/expenses.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';

const useExpenses = () => {
  const {getExpenses} = useNetwork();
  const dispatch = useAppDispatch();

  const fetchExpenses = useCbOnce(
    async (filters: Record<string, string> = {}) => {
      const data = await getExpenses(filters);
      dispatch(setExpenses(data));
    },
  );

  return {fetchExpenses};
};

export default useExpenses;
