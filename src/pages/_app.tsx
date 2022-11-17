import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import '@styles/globals.css';
import GlobalStyle from '@styles/GlobalStyles';
import { colors } from '@styles/theme';
import { store } from '@store/index';
import Layout from '@components/Layout';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
