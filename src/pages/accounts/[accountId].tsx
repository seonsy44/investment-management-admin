import { GetServerSideProps } from 'next';
import axios from 'axios';

import AccountDetailView from '@components/AccountDetail';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import { Account } from '@type/account';

type Props = {
  account: Account;
};

function AccountDetail({ account }: Props) {
  return <AccountDetailView account={account} />;
}

export default AccountDetail;

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const id = params?.accountId;

  const res = await axios.get<Account>(`http://localhost:4000/accounts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return { props: { account: res.data } };
};
