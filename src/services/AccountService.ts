import { AxiosResponse } from 'axios';

import axios from '@utils/getAxios';
import { Account } from '@type/account';

const AccountsService = {
  async getAccounts() {
    const res = await axios({ bearer: true }).get<Account[], AxiosResponse<Account[]>>('/accounts');
    return res.data;
  },
};

export default AccountsService;
