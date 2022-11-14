import { AxiosResponse } from 'axios';
import axios from '@utils/getAxios';
import { User, UserLogin } from '@type/user';

const AuthService = {
  async signin({ email, password }: UserLogin) {
    const res = await axios({ bearer: false }).post<User, AxiosResponse<User>, UserLogin>('/login', {
      email,
      password,
    });
    return res.data;
  },
};

export default AuthService;
