import { GetServerSideProps } from 'next';
import axios from 'axios';

import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import { User } from '@type/user';
import { Account } from '@type/account';
import UserDetailView from '@components/UserDetail';

type Props = {
  user: User;
  accounts: Account[];
};

function UserDetail({ user, accounts }: Props) {
  return <UserDetailView user={user} accounts={accounts} />;
}

export default UserDetail;

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const id = params?.userId;

  const userRes = await axios.get<User>(`http://localhost:4000/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const accountsRes = await axios.get<User>(`http://localhost:4000/accounts?user_id=${userRes.data.uuid}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return { props: { user: userRes.data, accounts: accountsRes.data } };
};
