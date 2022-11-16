import { Account } from '@type/account';
import useAccounts from '@hooks/useAccounts';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import useAccountQueryState from '@hooks/useAccountQueryState';
import Table from './Table';
import Pagenation from './Pagenation';

type Props = {
  accounts: Account[];
};

function Accounts({ accounts }: Props) {
  const { page, limit } = useAccountQueryState();
  const { dispatchPage } = useAccountQueryDispatch();
  useAccounts();

  return (
    <>
      <Table accounts={accounts} />
      <Pagenation contents={accounts} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Accounts;
