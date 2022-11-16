import { useMemo } from 'react';

import useAccountQueryState from '@hooks/useAccountQueryState';

function useAccountURL() {
  const { brokerId, status, isActive, page, limit } = useAccountQueryState();

  return useMemo(() => {
    const queries = [`_page=${page}`, `_limit=${limit}`];

    if (!(brokerId === 'all')) queries.push(`broker_id=${brokerId}`);
    if (!(status === 'all')) queries.push(`status=${status}`);
    if (!(isActive === 'all')) queries.push(`is_active=${isActive}`);

    return `/accounts?${queries.join('&')}`;
  }, [brokerId, status, isActive, page, limit]);
}

export default useAccountURL;
