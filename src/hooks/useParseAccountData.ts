import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Account } from '@type/account';
import UserService from '@services/UserService';
import { accountStatus, brokers } from '@utils/const';
import { parseDate } from '@utils/parseDate';
import { TEXT_RIGHT } from '@components/UI/BodyColumn';
import { parseAccountNumber } from '@utils/parseAccountNumber';

type Props = {
  account: Account;
};

function useParseAccountData({
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

  const parsedAccount = useMemo(
    () => [
      { key: 'broker_id', title: '증권사', content: brokers[brokerId] },
      { key: 'number', title: '계좌번호', content: parseAccountNumber(number), href: `/accounts/${uuid}` },
      { key: 'user_id', title: '고객명', content: data?.name ?? '', href: `/users/${data?.uuid}` },
      { key: 'status', title: '운용상태', content: accountStatus[status] },
      { key: 'name', title: '계좌명', content: name },
      { key: 'assets', title: '평가금액', content: Number(assets).toLocaleString(), type: TEXT_RIGHT },
      { key: 'payments', title: '입금금액', content: Number(payments).toLocaleString(), type: TEXT_RIGHT },
      { key: 'is_active', title: '계좌상태', content: isActive ? '활성' : '비활성' },
      { key: 'created_at', title: '계좌개설일', content: parseDate(createdAt), type: TEXT_RIGHT },
    ],
    [uuid, name, data]
  );

  return parsedAccount;
}

export default useParseAccountData;
