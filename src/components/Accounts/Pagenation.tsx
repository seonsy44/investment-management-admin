import { flexBox } from '@styles/mixins';
import styled from 'styled-components';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import { Account } from '@type/account';
import { User } from '@type/user';

type Props = {
  contents: Account[] | User[];
  page: number;
  limit: number;
  dispatchPage: (page: number) => void;
};

function Pagenation({ contents, page, limit, dispatchPage }: Props) {
  const handlePrevClick = () => dispatchPage(page - 1);
  const handleNextClick = () => dispatchPage(page + 1);

  return (
    <Container>
      <Button disabled={page === 1} onClick={handlePrevClick}>
        <HiOutlineChevronLeft />
      </Button>

      <Page>{page}</Page>

      <Button disabled={contents.length < limit} onClick={handleNextClick}>
        <HiOutlineChevronRight />
      </Button>
    </Container>
  );
}

export default Pagenation;

const Container = styled.div`
  ${flexBox('row', 'flex-end')}
  width: 100%;
  padding: 10px 5px;
`;

const Button = styled.button<{ disabled: boolean }>`
  font-size: 25px;
  color: ${({ disabled, theme }) => (disabled ? theme.GRAY_DARK : theme.NAVY)};
`;

const Page = styled.span`
  padding: 0 20px;
  font-size: 20px;
`;
