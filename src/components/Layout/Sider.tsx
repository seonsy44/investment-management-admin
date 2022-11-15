import styled from 'styled-components';

import { flexBox } from '@styles/mixins';
import { sider } from '@utils/const';
import SiderItem from './SiderItem';

function Sider() {
  return (
    <Container>
      <Title>D. PREFACE</Title>
      <ul>
        {sider.map(({ id, name, href, Icon }) => (
          <SiderItem key={id} name={name} href={href} Icon={Icon} />
        ))}
      </ul>
    </Container>
  );
}

export default Sider;

const Container = styled.div`
  grid-area: sider;
  background-color: ${({ theme }) => theme.NAVY};
`;

const Title = styled.div`
  ${flexBox()};
  width: 100%;
  height: 10vh;
  font-size: 2.5vw;
  color: white;
`;
