import { useMemo } from 'react';

import useUserQueryState from './useUserQueryState';

function useUserURL() {
  const { isActive, isStaff, page, limit } = useUserQueryState();

  return useMemo(() => {
    const queries = [`_page=${page}`, `_limit=${limit}`];

    if (!(isActive === 'all')) queries.push(`is_active=${isActive}`);
    if (!(isStaff === 'all')) queries.push(`is_staff=${isStaff}`);

    return `/users?${queries.join('&')}`;
  }, [isActive, isStaff, page, limit]);
}

export default useUserURL;
