import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useAccountQueryState from '@hooks/useAccountQueryState';
import useHeaderTitleDispatch from './useHeaderTitleDispatch';

function useAccounts() {
  const { brokerId, status, isActive, page, limit } = useAccountQueryState();
  const router = useRouter();
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    const queries = [`_page=${page}`, `_limit=${limit}`];

    if (!(brokerId === 'all')) queries.push(`broker_id=${brokerId}`);
    if (!(status === 'all')) queries.push(`status=${status}`);
    if (!(isActive === 'all')) queries.push(`is_active=${isActive}`);

    router.push(`/accounts?${queries.join('&')}`);
  }, [brokerId, status, isActive, page, limit]);

  useEffect(() => {
    dispatchTitle('계좌 목록');
  }, []);
}

export default useAccounts;
