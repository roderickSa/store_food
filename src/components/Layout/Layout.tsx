import Head from "next/head";
import { LayoutProps } from "./Layout.types";

const Layout = ({
  title = "Store Food",
  description = "Store Food",
  children,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
