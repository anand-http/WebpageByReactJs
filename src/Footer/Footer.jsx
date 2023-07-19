import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          <h2>TechyStar</h2>
          <p>@All right reserved</p>
        </div>

        <div className="right">
          <h5>Follow us</h5>
          <div>
            <a href="https://www.instagram.com/anand_fitdev/">Instagram</a>
            <a href="https://www.instagram.com/anand_fitdev/">Snap</a>
            <a href="https://www.instagram.com/anand_fitdev/">Twitter</a>
            <a href="https://www.instagram.com/anand_fitdev/">Facebook</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
