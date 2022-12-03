import styled from 'styled-components';

import { User } from '@type/user';
import useUsers from '@hooks/useUsers';
import useUserQueryState from '@hooks/useUserQueryState';
import Pagenation from '@components/Accounts/Pagenation';
import useUserQueryDispatch from '@hooks/useUserQueryDispatch';
import Seo from '@components/Layout/Seo';
import SearchBar from '@components/UI/SearchBar';
import { flexBox } from '@styles/mixins';
import Table from './Table';
import Filters from './Filters';

type Props = {
  users: User[];
};

function Users({ users }: Props) {
  const { page, limit } = useUserQueryState();
  const { dispatchPage, dispatchSearch } = useUserQueryDispatch();
  useUsers();

  return (
    <>
      <Seo title="D. PREFACE | 사용자 목록" />
      <FilterAndSearch>
        <Filters />
        <SearchBar dispatchSearch={dispatchSearch} />
      </FilterAndSearch>
      <Table users={users} />
      <Pagenation contents={users} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Users;

const FilterAndSearch = styled.div`
  ${flexBox('row', 'space-between')}
`;
