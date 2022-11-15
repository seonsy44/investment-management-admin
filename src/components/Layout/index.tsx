import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Sider from './Sider';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const { pathname } = useRouter();

  if (pathname === '/signin') return <>{children}</>;

  return (
    <Container>
      <Sider />
      <Header />
      <Content>
        <ChildrenContainer>{children}</ChildrenContainer>
        <Footer />
      </Content>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 1fr 9fr;
  grid-template-areas:
    'sider header'
    'sider content';
`;

const Content = styled.div`
  gred-area: content;
  background-color: ${({ theme }) => theme.GRAY_BG};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChildrenContainer = styled.div`
  min-height: calc(90vh - 100px);
`;
