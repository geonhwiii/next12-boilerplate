import GlobalStyles from '@/styles/global';
import localFont from '@/utils/local-font';
import styled from '@emotion/styled';
import {PropsWithChildren} from 'react';

export default function Layout({children}: PropsWithChildren) {
  return (
    <>
      <Main className={localFont.className}>
        <GlobalStyles />
        {children}
      </Main>
    </>
  );
}

const Main = styled.main`
  position: relative;
  display: block;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 40px;
  min-height: 100vh;
`;
