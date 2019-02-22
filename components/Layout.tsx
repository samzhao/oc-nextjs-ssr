import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { OpenComponentsContext } from "react-oc";

type Props = {
  title?: string;
  prefetchedComponents?: object;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title",
  prefetchedComponents
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    <OpenComponentsContext
      baseUrl="https://sz-oc-registry.herokuapp.com/"
      prefetchedComponents={prefetchedComponents}
      clientOc={typeof window === "object" && (window as any).oc}
    >
      {children}
    </OpenComponentsContext>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
