import React, { useEffect } from 'react';
import styled from 'styled-components';

import useHeaderTitleDispatch from '@hooks/useHeaderTitleDispatch';

function Users() {
  const dispatchTitle = useHeaderTitleDispatch();

  useEffect(() => {
    dispatchTitle('사용자 목록');
  }, []);

  return <Container>Users</Container>;
}

export default Users;

const Container = styled.div``;
