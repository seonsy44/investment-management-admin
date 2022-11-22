import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import AccountDetailView from '@components/AccountDetail';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import { Account } from '@type/account';
import useExpiredToken from '@hooks/useExpiredToken';

type Props = {
  account: Account;
  isExpired?: boolean;
};

function AccountDetail({ account, isExpired }: Props) {
  useExpiredToken(isExpired);

  return <AccountDetailView account={account} />;
}

export default AccountDetail;

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const id = params?.accountId;
  let res;

  try {
    res = await axios.get<Account>(`${process.env.NEXT_PUBLIC_SERVER_URL}/accounts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return {
        props: {
          account: {},
          isExpired: true,
        },
      };
    }
  }

  return { props: { account: res?.data } };
};
