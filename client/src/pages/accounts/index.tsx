import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import AccountsView from '@components/Accounts';
import { Account } from '@type/account';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from '@repositories/CookieTokenRepository';

type Props = {
  accounts: Account[];
};

function Accounts({ accounts }: Props) {
  return <AccountsView accounts={accounts} />;
}

export default Accounts;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const urlArray = req.url?.split('?');
  let accountsRes;

  try {
    if (urlArray && urlArray.length > 1) {
      accountsRes = await axios.get<Account[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/accounts?${urlArray[1]}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      accountsRes = await axios.get<Account[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/accounts?_page=1&_limit=30`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      res.setHeader('Set-Cookie', [`${COOKIE_TOKEN_KEY}=${TOKEN_EXPIRED}; Path=/`]);
      return {
        redirect: {
          destination: '/signin',
        },
        props: {},
      };
    }
  }

  return { props: { accounts: accountsRes?.data } };
};
