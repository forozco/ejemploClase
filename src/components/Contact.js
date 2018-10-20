// import React from "react";
import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";


function Contact(props) {
  return (
    <div className="contact">
      <span>{props.name}</span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired
};

export default Contact;