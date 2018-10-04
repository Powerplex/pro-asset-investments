import React from "react";

import { BOX_THEMES } from "components/Box";
import TitleBox from "components/TitleBox";

import Layout from "layouts/main";

const Home = () => (
  <Layout title="Home">
    <p>Title (h1):</p>
    <h1 className="title">Homepage</h1>
    <p>Title (h2):</p>
    <p>Title (h3):</p>
    <p>Boxes (title only):</p>
    <TitleBox theme={BOX_THEMES.gold} title="QUALITY HOME, QUALITY ASSETS" />
    <TitleBox
      theme={BOX_THEMES.lightgold}
      title="QUALITY HOME, QUALITY ASSETS"
    />
    <TitleBox theme={BOX_THEMES.white} title="QUALITY HOME, QUALITY ASSETS" />
    <p>Boxes (title + subtitle):</p>
    <p>Boxes (article):</p>
    <p>Boxes (data/insights):</p>
    <p>Contact Form</p>
    <p>Team member</p>
    <p>Team (global)</p>
    <p>Team description</p>
  </Layout>
);

export default Home;
