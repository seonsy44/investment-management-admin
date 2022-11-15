import { HiOutlineTemplate, HiOutlineTable, HiOutlineUsers, HiOutlineLogout } from 'react-icons/hi';

export const sider = [
  { id: 1, name: '대시보드', keyword: 'dashbaord', href: '/', Icon: HiOutlineTemplate },
  { id: 2, name: '계좌 목록', keyword: 'accounts', href: '/accounts', Icon: HiOutlineTable },
  { id: 3, name: '사용자 목록', keyword: 'users', href: '/users', Icon: HiOutlineUsers },
  { id: 9999, name: '로그아웃', keyword: 'logout', Icon: HiOutlineLogout },
];
