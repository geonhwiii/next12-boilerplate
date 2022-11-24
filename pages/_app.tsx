import {useRef} from 'react';
import Head from '@/components/atomics/Head';
import BasicLayout from '@/components/common/Layout';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

export default function App({Component, pageProps}: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 5,
        },
      },
    }),
  ).current;
  return (
    <>
      <Head title='Next12 Boiler Template' />
      <QueryClientProvider client={queryClient}>
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
