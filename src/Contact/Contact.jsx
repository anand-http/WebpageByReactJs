import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="main">
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your good name" />
          </div>
          

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label htmlFor="Phone">Phone</label>
            <input type="number" placeholder="Enter your Phone" />
          </div>
          <div>
            <label htmlFor="message">Query</label>
            <input type="text" placeholder="Your Query" />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
