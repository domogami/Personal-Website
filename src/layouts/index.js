import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import favicon from "../images/favicon.png";
import Header from "../components/header";
import "./index.css";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: "Dominick's Personal Website" },
        { name: "keywords", content: "Dominick Lee, UCSD Student" },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
