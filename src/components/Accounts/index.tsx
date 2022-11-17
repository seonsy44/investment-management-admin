import { Account } from '@type/account';
import useAccounts from '@hooks/useAccounts';
import useAccountQueryDispatch from '@hooks/useAccountQueryDispatch';
import useAccountQueryState from '@hooks/useAccountQueryState';
import Seo from '@components/Layout/Seo';
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
      <Seo title="D. PREFACE | 계좌 목록" />
      <Table accounts={accounts} isSelectBox />
      <Pagenation contents={accounts} page={page} limit={limit} dispatchPage={dispatchPage} />
    </>
  );
}

export default Accounts;
