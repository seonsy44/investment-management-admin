import { useRouter } from 'next/router';

import useUpdateEffect from '@hooks/useUpdateEffect';
import useAccountQueryState from '@hooks/useAccountQueryState';

function useAccountsEffect() {
  const { brokerId, status, isActive, page, limit } = useAccountQueryState();
  const router = useRouter();

  useUpdateEffect(() => {
    const queries = [`_page=${page}`, `_limit=${limit}`];

    if (!(brokerId === 'all')) queries.push(`broker_id=${brokerId}`);
    if (!(status === 'all')) queries.push(`status=${status}`);
    if (!(isActive === 'all')) queries.push(`is_active=${isActive}`);

    router.push(`/accounts?${queries.join('&')}`);
  }, [brokerId, status, isActive, page, limit]);
}

export default useAccountsEffect;
