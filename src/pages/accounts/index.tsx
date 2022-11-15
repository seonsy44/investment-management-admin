import { GetServerSideProps } from 'next';

import AccountsView from '@components/Accounts';
import { Account } from '@type/account';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import axios, { AxiosResponse } from 'axios';

type Props = {
  accounts: Account[];
};

function Accounts({ accounts }: Props) {
  return <AccountsView accounts={accounts} />;
}

export default Accounts;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const urlArray = req.url?.split('?');
  let res;

  if (urlArray && urlArray.length > 1) {
    res = await axios.get<Account[], AxiosResponse<Account[]>>(`http://localhost:4000/accounts?${urlArray[1]}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } else {
    res = await axios.get<Account[], AxiosResponse<Account[]>>(`http://localhost:4000/accounts?_page=1&_limit=30`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  return { props: { accounts: res.data } };
};
