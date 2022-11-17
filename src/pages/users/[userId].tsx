import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import { User } from '@type/user';
import { Account } from '@type/account';
import UserDetailView from '@components/UserDetail';
import useExpiredToken from '@hooks/useExpiredToken';

type Props = {
  user: User;
  accounts: Account[];
  isExpired?: boolean;
};

function UserDetail({ user, accounts, isExpired }: Props) {
  useExpiredToken(isExpired);

  return <UserDetailView user={user} accounts={accounts} />;
}

export default UserDetail;

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const id = params?.userId;
  let userRes;
  let accountsRes;

  try {
    userRes = await axios.get<User>(`http://localhost:4000/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    accountsRes = await axios.get<User>(`http://localhost:4000/accounts?user_id=${userRes.data.uuid}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 401) {
      return {
        props: {
          user: {},
          accounts: [],
          isExpired: true,
        },
      };
    }
  }

  return { props: { user: userRes?.data, accounts: accountsRes?.data } };
};
