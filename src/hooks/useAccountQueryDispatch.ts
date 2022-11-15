import { useDispatch } from 'react-redux';
import { setBrokerId, setIsActive, setPage, setStatus } from '@store/accountQuerySlice';

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

  return { dispatchBrokerId, dispatchStatus, dispatchActivity, dispatchPage };
}

export default useAccountQueryDispatch;
