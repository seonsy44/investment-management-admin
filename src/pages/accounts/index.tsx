import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import AccountsView from '@components/Accounts';
import { Account } from '@type/account';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import useExpiredToken from '@hooks/useExpiredToken';

type Props = {
  accounts: Account[];
  isExpired?: boolean;
};

function Accounts({ accounts, isExpired }: Props) {
  useExpiredToken(isExpired);

  return <AccountsView accounts={accounts} />;
}

export default Accounts;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const urlArray = req.url?.split('?');
  let accountsRes;

  try {
    if (urlArray && urlArray.length > 1) {
      accountsRes = await axios.get<Account[]>(`http://localhost:4000/accounts?${urlArray[1]}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      accountsRes = await axios.get<Account[]>(`http://localhost:4000/accounts?_page=1&_limit=30`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return {
        props: {
          accounts: [],
          isExpired: true,
        },
      };
    }
  }

  return { props: { accounts: accountsRes?.data } };
};
