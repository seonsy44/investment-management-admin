import styled from 'styled-components';

import { flexBox } from '@styles/mixins';

const TEXT_RIGHT = 'textRight';
const TEXT_BLUE = 'textBlue';

type Props = {
  children: React.ReactNode;
  type?: typeof TEXT_RIGHT | typeof TEXT_BLUE;
};

function BodyColumn({ children, type }: Props) {
  if (type === TEXT_RIGHT) return <ColumnTextRight>{children}</ColumnTextRight>;
  if (type === TEXT_BLUE) return <ColumnTextBlue>{children}</ColumnTextBlue>;

  return <Column>{children}</Column>;
}

export default BodyColumn;

const Column = styled.td`
  ${flexBox()};
  padding: 10px;
  background-color: white;
  font-size: 12px;
  border-top: none;
`;

const ColumnTextRight = styled(Column)`
  ${flexBox('row', 'flex-end')};
`;

const ColumnTextBlue = styled(ColumnTextRight)`
  color: ${({ theme }) => theme.BLUE};
  > span {
    cursor: pointer;
  }
`;
