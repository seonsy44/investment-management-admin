import styled from 'styled-components';

import { flexBox } from '@styles/mixins';

type Props = {
  children: React.ReactNode;
};

function HeadColumn({ children }: Props) {
  return <Column>{children}</Column>;
}

export default HeadColumn;

const Column = styled.td`
  ${flexBox()};
  padding: 10px 0;
  background-color: ${({ theme }) => theme.GRAY_MEDIUM};
  font-size: 12px;
  font-weight: 700;
`;
