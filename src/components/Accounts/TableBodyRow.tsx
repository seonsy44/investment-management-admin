import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import UserService from '@services/UserService';
import { Account } from '@type/account';
import { accountStatus, brokers } from '@utils/const';
import { parseDate } from '@utils/parseDate';
import BodyColumn from '@components/UI/BodyColumn';

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
      <BodyColumn>{brokers[brokerId]}</BodyColumn>
      <BodyColumn type="textBlue">
        <Link href={`/accounts/${uuid}`}>{number}</Link>
      </BodyColumn>
      <BodyColumn type="textBlue">
        <Link href={`/users/${data?.uuid}`}>
          <a>{data?.name}</a>
        </Link>
      </BodyColumn>
      <BodyColumn>{accountStatus[status]}</BodyColumn>
      <BodyColumn>{name}</BodyColumn>
      <BodyColumn type="textRight">{Number(assets).toLocaleString()}</BodyColumn>
      <BodyColumn type="textRight">{Number(payments).toLocaleString()}</BodyColumn>
      <BodyColumn>{isActive ? '활성' : '비활성'}</BodyColumn>
      <BodyColumn type="textRight">{parseDate(createdAt)}</BodyColumn>
    </>
  );
}

export default TableBodyRow;
