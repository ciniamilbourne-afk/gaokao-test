import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "@fontsource/poppins/400.css";

import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>高考青春复盘测试</title>
        <meta name="description" content="2026年高考青春复盘测试 - 测测你从当年的考场走到如今的社会，究竟进化出了怎样的人格状态" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
