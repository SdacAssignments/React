import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-primary">
        <div class="container">
          <link class="navbar-brand" href="#">
            Navbar
          </link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <link class="nav-link active" to="/index">
                  Home
                </link>
              </li>
              <li class="nav-item">
                <link class="nav-link" to="/about">
                  About Us
                </link>
              </li>
              <li class="nav-item">
                <link class="nav-link" to="/contact">
                  Contact Us
                </link>
              </li>
            </ul>
            <form class="d-flex my-2 my-lg-0">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
