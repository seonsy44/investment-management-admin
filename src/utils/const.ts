import { HiOutlineTemplate, HiOutlineTable, HiOutlineUsers, HiOutlineLogout } from 'react-icons/hi';

const contents = {
  dashboard: { name: '대시보드', href: '/' },
  accounts: { name: '계좌 목록', href: '/accounts' },
  users: { name: '사용자 목록', href: '/users' },
  logout: { name: '로그아웃', href: null },
};

export const sider = [
  {
    id: 1,
    name: contents.dashboard.name,
    keyword: 'dashbaord',
    href: contents.dashboard.href,
    Icon: HiOutlineTemplate,
  },
  { id: 2, name: contents.accounts.name, keyword: 'accounts', href: contents.accounts.href, Icon: HiOutlineTable },
  { id: 3, name: contents.users.name, keyword: 'users', href: contents.users.href, Icon: HiOutlineUsers },
  { id: 9999, name: contents.logout.name, keyword: 'logout', href: contents.logout.href, Icon: HiOutlineLogout },
];

export const headerTitle = {
  [contents.dashboard.href]: contents.dashboard.name,
  [contents.accounts.href]: contents.accounts.name,
  [contents.users.href]: contents.users.name,
};
