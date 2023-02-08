import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import theme from '../theme/theme';
import Fonts from '../theme/Font';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider theme={theme}>
      <span className="theme-bejamas" />
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  );
}

export default MyApp;
