import React from 'react';
import styled from 'styled-components';

import { Account } from '@type/account';
import TableBodyRow from '@components/Accounts/TableBodyRow';
import TableHeadRow from './TableHeadRow';

type Props = {
  accounts: Account[];
  isSelectBox: boolean;
};

function Table({ accounts, isSelectBox }: Props) {
  return (
    <Container>
      <TableHead>
        <Row>
          <TableHeadRow isSelectBox={isSelectBox} />
        </Row>
      </TableHead>
      <tbody>
        <Row>
          {accounts.map((account) => (
            <TableBodyRow key={account.uuid} account={account} />
          ))}
        </Row>
      </tbody>
    </Container>
  );
}

export default Table;

const Container = styled.table`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.GRAY_BG};
  border-bottom: none;
`;

const TableHead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Row = styled.tr`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 2fr 2fr 2fr 1.5fr 2fr;
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.GRAY_BG};

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_BG};
  }
`;
