import {useAppDispatch, useAppSelector} from 'store/hooks.ts';
import {setFilters} from 'store/actions/global.ts';

const useFiltersSelector = () => {
  const filters = useAppSelector(state => state.global.filters);
  const dispatch = useAppDispatch();

  const resetFilters = () =>
    dispatch(
      setFilters({
        title: '',
        date: '',
      }),
    );

  return {
    filters,
    setFilters: (f: typeof filters) => dispatch(setFilters(f)),
    resetFilters,
  };
};

export default useFiltersSelector;
