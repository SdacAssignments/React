import React from "react";

const Error = () => {
  return (
    <div class="bg-dark text-danger vh-100">
      <div class="p-2">
        <p class="fs-2 text-center">Error 404! Page Not Found : /</p>
        <div class="container">
          <p class="mt-5">
            Possible Error: Unable to Find Page or Failed To Establish Link
          </p>
          <p>
            1.Incorrect URL: The user might have typed the URL incorrectly,
            leading to a non-existent page.
          </p>
          <p>
            2. Broken Links: A link on another page might point to a URL that no
            longer exists or was never created.
          </p>
          <p>
            3. Moved or Deleted Content: The page might have been moved to a
            different URL or deleted without a proper redirect.
          </p>
          <p>
            4.Server Configuration Issues: The server might be incorrectly
            configured, causing it to not find the requested page.
          </p>
          <p>
            5.Incorrectly Set Up Routing: In web applications, the routing
            configuration might not properly map to the requested URL.
          </p>
          <p>
            6.File Name or Path Issues: If the page relies on case-sensitive
            file systems, a mismatch in case (e.g., page.html vs. Page.html)
            could result in a 404 error.
          </p>
          <p>
            7.Domain Name Resolution: If the DNS settings are incorrect, the
            domain might resolve to the wrong server, where the requested page
            does not exist.
          </p>
          <p>
            8.Permissions Issues: The page might exist, but incorrect file or
            directory permissions could prevent it from being accessed.
          </p>
          <p>
            9.Temporary Unavailability: The server might temporarily be unable
            to find the page due to ongoing updates or maintenance.
          </p>
          <p>
            10.Cache Issues: The browser might be caching an outdated version of
            the website where the page was not present.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;
