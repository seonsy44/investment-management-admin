import Link from 'next/link';

import { Account } from '@type/account';
import BodyColumn from '@components/UI/BodyColumn';
import useParseAccountData from '@hooks/useParseAccountData';

type Props = {
  account: Account;
};

function TableBodyRow({ account }: Props) {
  const parsedAccount = useParseAccountData({ account });

  return (
    <>
      {parsedAccount.map((item) => {
        if (item.href)
          return (
            <BodyColumn key={item.key} type="textBlue">
              <Link href={item.href}>
                <a>{item.content}</a>
              </Link>
            </BodyColumn>
          );

        return (
          <BodyColumn key={item.key} type={item.type}>
            {item.content}
          </BodyColumn>
        );
      })}
    </>
  );
}

export default TableBodyRow;
