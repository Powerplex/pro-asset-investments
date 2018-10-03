import React from "react";

import Layout from "layouts/main";
import css from "styles/variables.scss";

const Home = () => (
  <Layout title="About us">
    <div className="hero" className={css.example}>
      <h1 className="title">About us...</h1>
      <div className="row">Lorem ipsum...</div>
    </div>
  </Layout>
);

export default Home;
