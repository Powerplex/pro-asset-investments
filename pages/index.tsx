import React from "react";
import classNames from "classnames";

import Layout from "layouts/main";
import css from "styles/variables.scss";

const wording: string = "Lorem ipsum...";

const Home = () => (
  <Layout title="Home">
    <div className={classNames("hero", css.example)}>
      <h1 className="title">Homepage</h1>
      <div className="row">{wording}</div>
    </div>
  </Layout>
);

export default Home;
