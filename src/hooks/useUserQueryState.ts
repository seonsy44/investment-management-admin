import { UserQueryState } from '@store/userQuerySlice';
import { useSelector } from 'react-redux';

function useUserQueryState() {
  const { userQuery } = useSelector((state: { userQuery: UserQueryState }) => state);

  const isActive = userQuery.is_active ?? 'all';
  const isStaff = userQuery.is_staff ?? 'all';
  const { page, limit, search } = userQuery;

  return { isActive, isStaff, page, limit, search };
}

export default useUserQueryState;
