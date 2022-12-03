import styled from 'styled-components';

import { Account } from '@type/account';
import useAccounts from '@hooks/useAccounts';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import useAccountQueryState from '@hooks/useAccountQueryState';
import Seo from '@components/Layout/Seo';
import SearchBar from '@components/UI/SearchBar';
import { flexBox } from '@styles/mixins';
import Table from './Table';
import Pagenation from './Pagenation';
import Filters from './Filters';

type Props = {
  accounts: Account[];
};

function Accounts({ accounts }: Props) {
  const { page, limit } = useAccountQueryState();
  const { dispatchPage, dispatchSearch } = useAccountQueryDispatch();
  useAccounts();

  return (
    <>
      <Seo title="D. PREFACE | 계좌 목록" />
      <FilterAndSearch>
        <Filters />
        <SearchBar dispatchSearch={dispatchSearch} />
      </FilterAndSearch>
      <Table accounts={accounts} />
      <Pagenation contents={accounts} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Accounts;

const FilterAndSearch = styled.div`
  ${flexBox('row', 'space-between')}
`;
