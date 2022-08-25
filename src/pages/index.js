import * as React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { firstRow, secondRow, networkBanner } from "../data/features";
/*import SearchBar from '@theme-original/SearchBar';*/

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function NetworkBanner({title, class_name, description, linkUrl, imageUrl}) {
  return (
    <div className="col-md-4 p-8">
      <Link to={useBaseUrl(linkUrl)} activeClassName="active">
        <div className={`banner d-flex ${ class_name }`}>
          <div className="icon-wrapper col-2">
            <img src={useBaseUrl(imageUrl)} alt={title} className="icon" />
          </div>
          <div className="details col-10">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function FirstRow({ title, status, description, linkUrl, imageUrl }) {
  // const imgUrl = useBaseUrl(imageUrl);
  return (

    <div className="col-md-4 p-8">
      <Link to={useBaseUrl(linkUrl)} activeClassName="active">
        <div className="show-card">
          <div className="icon-wrapper">
            <img src={useBaseUrl(imageUrl)} alt={title} className="icon" />
          </div>
          <div className="status">{status}</div>
          <div className="title">{title}</div>
          <div className="descriptions">{description}</div>
        </div>
      </Link>
    </div>

  );
}

function SecondRow({ title, status, description, linkUrl, imageUrl }) {
  // const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col-md-4 p-8">
      <Link to={useBaseUrl(linkUrl)}>
        <div className="show-card">
          <div className="icon-wrapper">
            <img src={useBaseUrl(imageUrl)} alt={title} className="icon" />
          </div>
          <div className="status">{status}</div>
          <div className="title">{title}</div>
          <div className="descriptions">{description}</div>
        </div>
      </Link>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <div
        className="bootstrap-wrapper"
      >
        <br/>
        <h1 align="center" style={{ fontWeight: '650' }}>Welcome to the Polygon Wiki</h1>


        <div className="container">

<Tabs
defaultValue="beginner"
className="tabs"
values={[
{label: 'Choose a Hub', value: 'beginner'},
{label: 'Browse by Product', value: 'products'},
]}>

<TabItem value="beginner">
<div className="row pt-40">
{networkBanner &&
networkBanner.length &&
networkBanner.map((props, idx) => (
 <NetworkBanner key={idx} {...props} />
))}{" "}
</div>
  <div id="Get Started" className="row">
    {firstRow &&
      firstRow.length &&
      firstRow.map((props, idx) => (
        <FirstRow key={idx} {...props} />
      ))}{" "}
  </div>
<div className="row pt-40">
    {networkBanner &&
      networkBanner.length &&
      networkBanner.map((props, idx) => (
        <NetworkBanner key={idx} {...props} />
      ))}{" "}
  </div>
</TabItem>
<TabItem value="products">
<div className="row pt-40">
    {networkBanner &&
      networkBanner.length &&
      networkBanner.map((props, idx) => (
        <NetworkBanner key={idx} {...props} />
      ))}{" "}
  </div>
  <div className="row">
    {secondRow &&
      secondRow.length &&
      secondRow.map((props, idx) => (
        <SecondRow key={idx} {...props} />
      ))}{" "}
  </div>
</TabItem>
</Tabs>
  <br/>
  <br/>
 </div>
</div>
</Layout>
);
}

export default Home;
