import axios from '@utils/getAxios';
import { User } from '@type/user';

const UserService = {
  async getUsers() {
    const res = await axios({ bearer: true }).get<User[]>('/users');
    return res.data;
  },

  async getUserById({ id }: { id: number }) {
    const res = await axios({ bearer: true }).get<User[]>(`/users?id=${id}`);
    return res.data[0];
  },

  async patchUser(id: string, data: { name: string }) {
    const res = await axios({ bearer: true }).patch<User>(`/users/${id}`, data);
    return res.data;
  },

  async deleteUser(id: string) {
    const res = await axios({ bearer: true }).delete(`/users/${id}`);
    return res.data;
  },
};

export default UserService;
