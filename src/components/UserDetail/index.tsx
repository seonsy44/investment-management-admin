import React, { useEffect } from 'react';
import styled from 'styled-components';

import { User } from '@type/user';
import { Account } from '@type/account';
import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';
import Table from '@components/Accounts/Table';
import UserInfoTable from './UserInfoTable';

type Props = {
  user: User;
  accounts: Account[];
};

function UserDetail({ user, accounts }: Props) {
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    dispatchTitle(`${user.name}의 계좌 목록`);
  }, []);
  return (
    <>
      <Title>사용자 정보</Title>
      <UserInfoTable user={user} />
      <SubTitle>증권 계좌 목록</SubTitle>
      <Table accounts={accounts} isSelectBox={false} />
    </>
  );
}

export default UserDetail;

const Title = styled.h2`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  margin-top: 25px;
  padding: 15px 10px;
  font-weight: 700;
`;
