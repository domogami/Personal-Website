import React from "react";
import Link from "gatsby-link";

const NotFoundPage = () => (
  <div className="error">
    <h1>This section has not been imlemented quite yet</h1>
    <p>Sorry for the wait!.</p>
    <Link className="Back" to="/">
      Go back to the homepage
    </Link>
  </div>
);

export default NotFoundPage;
