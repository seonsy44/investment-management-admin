import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import UserService from '@services/UserService';
import { flexBox } from '@styles/mixins';
import { Account } from '@type/account';
import { accountStatus, brokers } from '@utils/const';
import { parseDate } from '@utils/parseDate';
import Link from 'next/link';

type Props = {
  account: Account;
};

function TableBodyRow({
  account: {
    assets,
    broker_id: brokerId,
    created_at: createdAt,
    id,
    is_active: isActive,
    name,
    number,
    payments,
    status,
    user_id: userId,
    uuid,
  },
}: Props) {
  const { data } = useQuery(['users', userId], () => UserService.getUserById({ id: userId }));

  return (
    <>
      <Item>{brokers[brokerId]}</Item>
      <ItemTextBlue>
        <Link href={`/accounts/${uuid}`}>{number}</Link>
      </ItemTextBlue>
      <ItemTextBlue>
        <Link href={`/users/${data?.uuid}`}>
          <a>{data?.name}</a>
        </Link>
      </ItemTextBlue>
      <Item>{accountStatus[status]}</Item>
      <ItemTextRight>{name}</ItemTextRight>
      <ItemTextRight>{Number(assets).toLocaleString()}</ItemTextRight>
      <ItemTextRight>{Number(payments).toLocaleString()}</ItemTextRight>
      <Item>{isActive ? '활성' : '비활성'}</Item>
      <ItemTextRight>{parseDate(createdAt)}</ItemTextRight>
    </>
  );
}

export default TableBodyRow;

const Item = styled.td`
  ${flexBox()};
  padding: 10px;
  background-color: white;
  font-size: 12px;
  border-top: none;
`;

const ItemTextRight = styled(Item)`
  ${flexBox('row', 'flex-end')};
`;

const ItemTextBlue = styled(ItemTextRight)`
  color: ${({ theme }) => theme.BLUE};
  > span {
    cursor: pointer;
  }
`;
