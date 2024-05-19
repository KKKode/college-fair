import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
        <meta name="subject" content="College Fair" />
        <meta name="copyright" content="College Fair" />
        <meta name="category" content="College Fair" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="author" content="College Fair, collegefair@gmail.com" />
        <meta name="designer" content="College Fair" />
        <meta name="owner" content="College Fair" />
        <meta name="language" content="ES" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
