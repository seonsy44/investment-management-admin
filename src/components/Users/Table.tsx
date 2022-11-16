import React from 'react';
import styled from 'styled-components';

import { User } from '@type/user';
import useParseUserData from '@hooks/useParseUserData';
import TableHeadRow from './TableHeadRow';
import TableBodyRow from '../UI/TableBodyRow';

type Props = {
  users: User[];
};

function Table({ users }: Props) {
  return (
    <Container>
      <TableHead>
        <Row>
          <TableHeadRow />
        </Row>
      </TableHead>
      <tbody>
        <Row>
          {users.map((user) => {
            const parsedAccount = useParseUserData({ user });
            return <TableBodyRow key={user.uuid} data={parsedAccount} />;
          })}
        </Row>
      </tbody>
    </Container>
  );
}

export default Table;

const Container = styled.table`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.GRAY_DARK};
  border-bottom: none;
`;

const TableHead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 2;
`;

const Row = styled.tr`
  display: grid;
  grid-template-columns: 1.5fr 0.8fr 1.5fr 0.5fr 1fr 1.5fr 1fr 0.8fr 1fr 1fr 1fr;
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.GRAY_DARK};

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_DARK};
  }
`;
