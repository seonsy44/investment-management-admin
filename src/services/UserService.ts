import { AxiosResponse } from 'axios';

import axios from '@utils/getAxios';
import { User } from '@type/user';

const UserService = {
  async getUsers() {
    const res = await axios({ bearer: true }).get<User[], AxiosResponse<User[]>>('/users');
    return res.data;
  },

  async getUser({ id }: { id: number }) {
    const res = await axios({ bearer: true }).get<User, AxiosResponse<User>>(`/users/${id}`);
    return res.data;
  },
};

export default UserService;
