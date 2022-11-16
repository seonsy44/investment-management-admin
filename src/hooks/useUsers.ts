import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useHeaderTitleDispatch from './useHeaderTitleDispatch';
import useUserQueryState from './useUserQueryState';

function useUsers() {
  const { isActive, isStaff, page, limit } = useUserQueryState();
  const router = useRouter();
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    const queries = [`_page=${page}`, `_limit=${limit}`];

    if (!(isActive === 'all')) queries.push(`is_active=${isActive}`);
    if (!(isStaff === 'all')) queries.push(`is_staff=${isStaff}`);

    router.push(`/users?${queries.join('&')}`);
  }, [isActive, isStaff, page, limit]);

  useEffect(() => {
    dispatchTitle('사용자 목록');
  }, []);
}

export default useUsers;
