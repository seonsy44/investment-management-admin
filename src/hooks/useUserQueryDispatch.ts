import { setIsActive, setIsStaff, setPage } from '@store/userQuerySlice';
import { useDispatch } from 'react-redux';

function useUserQueryDispatch() {
  const dispatch = useDispatch();

  const dispatchIsActive = (isActive: string) => {
    dispatch(setIsActive(isActive));
  };

  const dispatchIsStaff = (isStaff: string) => {
    dispatch(setIsStaff(isStaff));
  };

  const dispatchPage = (page: number) => {
    dispatch(setPage(page));
  };

  return { dispatchIsActive, dispatchIsStaff, dispatchPage };
}

export default useUserQueryDispatch;
