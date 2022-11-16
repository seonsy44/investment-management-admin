import Link from 'next/link';

import BodyColumn from '@components/UI/BodyColumn';
import { Account } from '@type/account';
import useParseAccountData from '@hooks/useParseAccountData';

type Props = {
  account: Account;
};

function TableBodyRow({ account }: Props) {
  const parsedAccount = useParseAccountData({ account });
  return (
    <>
      {parsedAccount.map((item) => {
        if (item.href && typeof item.href === 'string')
          return (
            <BodyColumn key={item.key} type="textBlue">
              <Link href={item.href}>
                <a>{item.content}</a>
              </Link>
            </BodyColumn>
          );

        if (typeof item.type !== 'number')
          return (
            <BodyColumn key={item.key} type={item.type}>
              {item.content}
            </BodyColumn>
          );

        return <BodyColumn key={item.key}>{item.content}</BodyColumn>;
      })}
    </>
  );
}

export default TableBodyRow;
