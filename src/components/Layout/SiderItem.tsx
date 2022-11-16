import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { IconType } from 'react-icons/lib';

import { flexBox } from '@styles/mixins';
import useSignout from '@hooks/useSignout';

type Props = { name: string; href: (string | null)[]; Icon: IconType };

const indexPageidx = 0;

function SiderItem({ name, href, Icon }: Props) {
  const { pathname } = useRouter();
  const handleSignoutClick = useSignout();

  if (href[indexPageidx])
    return (
      <Container isSelected={href.includes(pathname)}>
        <Link href={href[indexPageidx]}>
          <a>
            <Icon />
            <span>{name}</span>
          </a>
        </Link>
      </Container>
    );

  return (
    <Container onClick={handleSignoutClick}>
      <a>
        <Icon />
        <span>{name}</span>
      </a>
    </Container>
  );
}

export default SiderItem;

const Container = styled.li<{ isSelected?: boolean }>`
  padding: 15px 20px;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.BLUE : 'none')};
  color: ${({ theme, isSelected }) => (isSelected ? 'white' : theme.GRAY_DARK)};

  a {
    ${flexBox('row', 'flex-start')}
    font-size: 16px;

    svg {
      margin-right: 10px;
      font-size: 24px;
    }
  }
`;
