import axios from '@utils/getAxios';
import { Account } from '@type/account';

const AccountsService = {
  async getAccounts() {
    const res = await axios({ bearer: true }).get<Account[]>('/accounts');
    return res.data;
  },

  async patchAccount(id: string, data: { name: string }) {
    const res = await axios({ bearer: true }).patch<Account>(`/accounts/${id}`, data);
    return res.data;
  },
};

export default AccountsService;
