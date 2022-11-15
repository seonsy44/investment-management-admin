import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import { Account } from '@type/account';
import useUpdateEffect from '@hooks/useUpdateEffect';
import useAccountQueryState from '@hooks/useAccountQueryState';
import TableBodyRow from './TableBodyRow';
import TableHeadRow from './TableHeadRow';

type Props = {
  accounts: Account[];
};

function Accounts({ accounts }: Props) {
  const { brokerId, status, isActive, page, limit } = useAccountQueryState();
  const router = useRouter();

  useUpdateEffect(() => {
    const queries = [`_page=${page}`, `_limit=${limit}`];

    if (!(brokerId === 'all')) queries.push(`broker_id=${brokerId}`);
    if (!(status === 'all')) queries.push(`status=${status}`);
    if (!(isActive === 'all')) queries.push(`is_active=${isActive}`);

    router.push(`/accounts?${queries.join('&')}`);

    window.scrollTo(0, 0);
  }, [brokerId, status, isActive, page, limit]);

  return (
    <Table>
      <TableHead>
        <Row>
          <TableHeadRow />
        </Row>
      </TableHead>
      <tbody>
        <Row>
          {accounts.map((account) => (
            <TableBodyRow key={account.uuid} account={account} />
          ))}
        </Row>
      </tbody>
    </Table>
  );
}

export default Accounts;

const Table = styled.table`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  border-bottom: none;
`;

const TableHead = styled.thead`
  position: sticky;
  top: 0;
`;

const Row = styled.tr`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 2fr 2fr 2fr 1.5fr 2fr;
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.GRAY_DARK};

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_DARK};
  }
`;
