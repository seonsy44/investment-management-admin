import { setIsActive, setIsStaff, setPage, setSearch } from '@store/userQuerySlice';
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

  const dispatchSearch = (search: string) => {
    dispatch(setSearch(search.trim()));
  };

  return { dispatchIsActive, dispatchIsStaff, dispatchPage, dispatchSearch };
}

export default useUserQueryDispatch;
