import { GetServerSideProps } from 'next';
import axios from 'axios';

import UsersView from '@components/Users';
import { COOKIE_TOKEN_KEY } from '@repositories/CookieTokenRepository';
import { User } from '@type/user';

type Props = {
  users: User[];
};

function Users({ users }: Props) {
  return <UsersView users={users} />;
}

export default Users;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const urlArray = req.url?.split('?');
  let res;

  if (urlArray && urlArray.length > 1) {
    res = await axios.get<User[]>(`http://localhost:4000/users?${urlArray[1]}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } else {
    res = await axios.get<User[]>(`http://localhost:4000/users?_page=1&_limit=30`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  return { props: { users: res.data } };
};
