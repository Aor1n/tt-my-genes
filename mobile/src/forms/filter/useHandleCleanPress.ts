import {useAppModalSelector} from 'hooks/selectors/useAppModalSelector.ts';
import {useCbOnce} from 'hooks/useCbOnce.ts';
import {notify} from 'utils/notify.ts';
import useExpenses from 'hooks/query/useExpenses.ts';

interface UseHandleCleanPressProps {
  resetForm: () => void;
}

const useHandleCleanPress = ({resetForm}: UseHandleCleanPressProps) => {
  const {hideModal} = useAppModalSelector();
  const {fetchExpenses} = useExpenses();
  return useCbOnce(async _ => {
    resetForm();
    hideModal();
    await fetchExpenses();
    notify({
      type: 'success',
      description: 'Filters were removed',
    });
  });
};

export default useHandleCleanPress;
