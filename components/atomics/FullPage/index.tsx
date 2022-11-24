import {css, Global} from '@emotion/react';
import styled from '@emotion/styled';
import {PropsWithChildren} from 'react';

export default function FullPage({children}: PropsWithChildren) {
  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
          }
        `}
      />
      <Layout>{children}</Layout>
    </>
  );
}

const Layout = styled.div`
  height: 100%;
`;
