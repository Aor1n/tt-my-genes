import {useAppDispatch, useAppSelector} from 'store/hooks.ts';
import {setIsModalShown} from 'store/actions/global.ts';

export const useAppModalSelector = () => {
  const dispatch = useAppDispatch();
  const isModalShown = useAppSelector(state => state.global.isModalShown);

  return {
    isModalShown,
    toggleIsModalShown: () => dispatch(setIsModalShown(!isModalShown)),
    setIsModalShown: (b: boolean) => dispatch(setIsModalShown(b)),
    hideModal: () => dispatch(setIsModalShown(false)),
  };
};
