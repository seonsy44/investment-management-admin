import { useDispatch } from 'react-redux';
import { setBrokerId, setIsActive, setPage, setSearch, setStatus } from '@store/accountQuerySlice';

function useAccountQueryDispatch() {
  const dispatch = useDispatch();

  const dispatchBrokerId = (brokerId: string) => {
    dispatch(setBrokerId(brokerId));
  };

  const dispatchStatus = (status: string) => {
    dispatch(setStatus(status));
  };

  const dispatchActivity = (isActive: string) => {
    dispatch(setIsActive(isActive));
  };

  const dispatchPage = (page: number) => {
    dispatch(setPage(page));
  };

  const dispatchSearch = (search: string) => {
    dispatch(setSearch(search.trim()));
  };

  return { dispatchBrokerId, dispatchStatus, dispatchActivity, dispatchPage, dispatchSearch };
}

export default useAccountQueryDispatch;
