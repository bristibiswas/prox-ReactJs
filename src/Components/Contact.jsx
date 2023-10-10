import React, { useState } from "react";
import "../styles/contact.css";
import { ToastContainer, toast } from "react-toastify";

import {
  FaUserAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, number, email, message } = user;

    const res = await fetch(
      "https://prox-5e903-default-rtdb.firebaseio.com/contactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          number,
          email,
          message,
        }),
      }
    );

    if (res) {
      setUser({
        name: "",
        number: "",
        email: "",
        message: "",
      });

      toast.info("This form submitted Successfully");
    }
  };

  return (
    <div className="contact">
      <form method="POST">
        <div className="contact-row">
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={getUserData}
              autoComplete="off"
              required
            />
            <label htmlFor="name">
              <FaUserAlt /> Your Name
            </label>
          </div>
          <div className="input-group">
            <input
              type="number"
              name="number"
              value={user.number}
              onChange={getUserData}
              autoComplete="off"
              required
            />
            <label htmlFor="number">
              <FaPhoneAlt /> Contact Number
            </label>
          </div>
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={getUserData}
            autoComplete="off"
            required
          />
          <label htmlFor="email">
            <FaEnvelope /> Your Email
          </label>
        </div>
        <div className="input-group">
          <textarea
            name="message"
            rows="8"
            value={user.message}
            onChange={getUserData}
            autoComplete="off"
            required
          ></textarea>
          <label htmlFor="message">
            <FaComments /> Your Message
          </label>
        </div>
        <button onClick={postData}>
          Submit <FaPaperPlane />
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
