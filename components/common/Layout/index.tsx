import FullPage from '@/components/atomics/FullPage';
import NavBar from '@/components/molecules/NavBar';
import GlobalStyles from '@/styles/global';
import {localFont} from '@/utils/local-font';
import styled from '@emotion/styled';
import {PropsWithChildren} from 'react';

export default function Layout({children}: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      <FullPage>
        <NavBar />
        <Main className={localFont.className}>
          <Container>{children}</Container>
        </Main>
      </FullPage>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: scroll;
  padding: 16px;
`;

const Container = styled.div``;
