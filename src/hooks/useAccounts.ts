import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useHeaderTitleDispatch from './useHeaderTitleDispatch';
import useAccountURL from './useAccountURL';

function useAccounts() {
  const accountURL = useAccountURL();
  const router = useRouter();
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    router.push(accountURL);
  }, [accountURL]);

  useEffect(() => {
    dispatchTitle('계좌 목록');
  }, []);
}

export default useAccounts;
