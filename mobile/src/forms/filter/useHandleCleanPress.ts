import {useAppModalSelector} from 'hooks/selectors/useAppModalSelector.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';
import {notify} from 'utils/notify.ts';
import useExpenses from 'hooks/query/useExpenses.ts';
import useFiltersSelector from 'hooks/selectors/useFiltersSelector.ts';

interface UseHandleCleanPressProps {
  resetForm: () => void;
}

const useHandleCleanPress = ({resetForm}: UseHandleCleanPressProps) => {
  const {hideModal} = useAppModalSelector();
  const {fetchExpenses} = useExpenses();
  const {resetFilters} = useFiltersSelector();
  return useCbOnce(async _ => {
    resetFilters();
    resetForm();
    await fetchExpenses();
    hideModal();
    notify({
      type: 'success',
      description: 'Filters were removed',
    });
  });
};

export default useHandleCleanPress;
