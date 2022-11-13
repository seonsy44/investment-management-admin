import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import '@styles/globals.css';
import GlobalStyle from '@styles/GlobalStyles';
import { colors } from '@styles/theme';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
