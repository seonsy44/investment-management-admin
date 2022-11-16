import { useSelector } from 'react-redux';

import { AccountQueryState } from '@store/accountQuerySlice';

function useAccountQueryState() {
  const { accountQuery } = useSelector((state: { accountQuery: AccountQueryState }) => state);

  const brokerId = accountQuery.broker_id ?? 'all';
  const status = accountQuery.status ?? 'all';
  const isActive = accountQuery.is_active ?? 'all';
  const { page, limit } = accountQuery;

  return { brokerId, status, isActive, page, limit };
}

export default useAccountQueryState;
