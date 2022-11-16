import React from 'react';
import styled, { css } from 'styled-components';

import { Account } from '@type/account';
import Columns from './Columns';

type Props = {
  account: Account;
};

function Table({ account }: Props) {
  return (
    <Container>
      <tbody>
        <Row>
          <Columns account={account} />
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

const Row = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr 1fr 2fr;
  grid-template-rows: 80px 80px 80px;
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.GRAY_DARK};

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.GRAY_DARK};
  }
`;

const Input = styled.input`
  padding: 10px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.BLUE};
  text-align: right;
`;

const Button = styled.button`
  position: absolute;
  right: 3px;
  bottom: 3px;
  padding: 3px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.BLUE};
  font-size: 10px;
  color: ${({ theme }) => theme.BLUE};
`;

const ColumnStyle = css`
  font-size: 15px;
`;
