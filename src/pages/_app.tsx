import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@styles/globals.css';
import GlobalStyle from '@styles/GlobalStyles';
import { colors } from '@styles/theme';
import { wrapper, persistor } from '@store/index';

const queryClient = new QueryClient();

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={colors}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
