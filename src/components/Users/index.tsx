import React from 'react';

import { User } from '@type/user';
import useUsers from '@hooks/useUsers';
import useUserQueryState from '@hooks/useUserQueryState';
import Pagenation from '@components/Accounts/Pagenation';
import useUserQueryDispatch from '@hooks/useUserQueryDispatch';
import Table from './Table';

type Props = {
  users: User[];
};

function Users({ users }: Props) {
  const { page, limit } = useUserQueryState();
  const { dispatchPage } = useUserQueryDispatch();
  useUsers();

  return (
    <>
      <Table users={users} />
      <Pagenation contents={users} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Users;
