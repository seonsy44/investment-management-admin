import { GetServerSideProps } from 'next';
import axios, { AxiosError } from 'axios';

import UsersView from '@components/Users';
import { COOKIE_TOKEN_KEY, TOKEN_EXPIRED } from '@repositories/CookieTokenRepository';
import { User } from '@type/user';

type Props = {
  users: User[];
};

function Users({ users }: Props) {
  return <UsersView users={users} />;
}

export default Users;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const token = req.cookies[COOKIE_TOKEN_KEY];
  const urlArray = req.url?.split('?');
  let usersRes;

  try {
    if (urlArray && urlArray.length > 1) {
      usersRes = await axios.get<User[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/users?${urlArray[1]}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } else {
      usersRes = await axios.get<User[]>(`${process.env.NEXT_PUBLIC_SERVER_URL}/users?_page=1&_limit=30`, {
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

  return { props: { users: usersRes?.data } };
};
