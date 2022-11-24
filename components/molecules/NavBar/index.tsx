import {size} from '@/constants/size';
import {media} from '@/utils/mediaQuery';
import styled from '@emotion/styled';

export default function NavBar() {
  return <Root>Navigation</Root>;
}

const Root = styled.header`
  padding: 0 16px;
  height: ${size.HEADER_HEIGHT_PX};
  border-bottom: 1px solid #eee;
  align-items: center;
  display: none;
  ${media.mobile} {
    display: flex;
  }
`;
