import '../assets/styles/global.css';
import { ApolloProvider } from '@apollo/client';
import client from '../utils/client';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;