import { HiOutlineTemplate, HiOutlineTable, HiOutlineUsers, HiOutlineLogout } from 'react-icons/hi';

export const contents = {
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
    href: [contents.dashboard.href],
    Icon: HiOutlineTemplate,
  },
  {
    id: 2,
    name: contents.accounts.name,
    keyword: 'accounts',
    href: [contents.accounts.href, `${contents.accounts.href}/[accountId]`],
    Icon: HiOutlineTable,
  },
  { id: 3, name: contents.users.name, keyword: 'users', href: [contents.users.href], Icon: HiOutlineUsers },
  { id: 9999, name: contents.logout.name, keyword: 'logout', href: [contents.logout.href], Icon: HiOutlineLogout },
];

export const brokers: Record<string, string> = {
  209: '유안타증권',
  218: '현대증권',
  230: '미래에셋증권',
  238: '대우증권',
  240: '삼성증권',
  243: '한국투자증권',
  247: '우리투자증권',
  261: '교보증권',
  262: '하이투자증권',
  263: 'HMC투자증권',
  264: '키움증권',
  265: '이베스트투자증권',
  266: 'SK증권',
  267: '대신증권',
  268: '아이엠투자증권',
  269: '한화투자증권',
  270: '하나대투자증권',
  279: '동부증권',
  280: '유진투자증권',
  288: '카카오페이증권',
  287: '메리츠종합금융증권',
  290: '부국증권',
  291: '신영증권',
  292: 'LIG투자증권',
  271: '토스증권',
};

export const brokerFormat: Record<string, string> = {
  209: '00-00000000-00',
  218: '00-0000000-000',
  230: '00-000000-0000',
  238: '00-000-0000-000',
  240: '00-0000-000000',
  243: '00-000000000-0',
  247: '00-0000-000000',
  261: '00-00-00000000',
  262: '00-0000000-000',
  263: '00-0000-000000',
  264: '00-0000-00-0000',
  265: '00-000-000-0000',
  266: '00-00000-00000',
  267: '00-000-0000000',
  268: '00-000000-00-00',
  269: '00-00000-00000',
  270: '00-000-0000000',
  279: '00-00000-00000',
  280: '00-0000-000000',
  288: '00-00000000-00',
  287: '00-0000-00000-0',
  290: '00-000000-0000',
  291: '00-0000-000000',
  292: '00-00000-00000',
  271: '00-000-0000000',
};

export const accountStatus: Record<string, string> = {
  9999: '관리자확인필요',
  1: '입금대기',
  2: '운용중',
  3: '투자중지',
  4: '해지',
};

export const activity: Record<string, string> = {
  true: '활성',
  false: '비활성',
};

export const staff: Record<string, string> = {
  true: 'O',
  false: 'X',
};
