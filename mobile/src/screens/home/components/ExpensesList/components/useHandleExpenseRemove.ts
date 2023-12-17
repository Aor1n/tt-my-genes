import {useCbOnce} from 'hooks/useCbOnce.ts';
import useExpenses from 'hooks/query/useExpenses.ts';
import useNetwork from 'hooks/useNetwork.ts';
import {notify} from 'utils/notify.ts';
import useFiltersSelector from 'hooks/selectors/useFiltersSelector.ts';

const useHandleExpenseRemove = (id: string) => {
  const {deleteExpense} = useNetwork();
  const {fetchExpenses} = useExpenses();
  const {filters} = useFiltersSelector();

  return useCbOnce(async _ => {
    await deleteExpense(id);
    await fetchExpenses(filters);
    notify({
      type: 'success',
      description: 'Expense was removed successfully!',
    });
  });
};

export default useHandleExpenseRemove;
