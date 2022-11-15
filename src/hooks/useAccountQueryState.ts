import { useSelector } from 'react-redux';

import { AccountQueryState } from '@store/accountQuerySlice';

function useAccountQueryState() {
  const { accountQeury } = useSelector((state: { accountQeury: AccountQueryState }) => state);

  const brokerId = accountQeury.broker_id ?? 'all';
  const status = accountQeury.status ?? 'all';
  const isActive = accountQeury.is_active ?? 'all';
  const { page, limit } = accountQeury;

  return { brokerId, status, isActive, page, limit };
}

export default useAccountQueryState;
