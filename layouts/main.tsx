import Head from "components/head";
import Nav from "components/nav";

type LayoutProps = {
  title: string;
  children?: any;
};

const Layout = ({ title, children }: LayoutProps) => (
  <div>
    <Head title={title} />
    <Nav />
    <div className="mainContainer">{children}</div>

    <style jsx global>{`
      .mainContainer {
        display: flex;
        flex-direction: column;
        border: 2px solid blue;
      }
      html {
        font-size: 62.5%;
      }

      body {
        font-size: 1.4rem;
      }

      h1 {
        font-size: 2.4rem;
      }
    `}</style>
  </div>
);

export default Layout;
