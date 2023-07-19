import React, { Fragment } from "react";
import {HashLink} from "react-router-hash-link";

import "./Header.scss";

const Header = () => {
  return (
    <Fragment>
      <nav>
        <h1 className="logo">TechyStar</h1>

        <div className="right-part">

          <HashLink className="menubtn" to="/#home">
            Home
          </HashLink>
          <HashLink className="menubtn" to="/#about">
            About
          </HashLink>
          <HashLink className="menubtn" to="/contact">
            Contact
          </HashLink>
          <HashLink className="menubtn" to="/#brands">
            Brands
          </HashLink>
          <HashLink className="menubtn" to="/services">
            Services
          </HashLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
