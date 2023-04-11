import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>We're sorry, but the page you requested could not be found.</p>
      <p>
        Please check that you have entered the correct URL, or try searching for
        the page using the search bar above.
      </p>
      <p>
        If you believe that this is an error, please contact us at{" "}
        <a href="mailto:webmaster@example.com">webmaster@example.com</a>.
      </p>
      <p>
        <a href="/">Return to the homepage</a>
      </p>
    </div>
  );
};

export default NotFound;
