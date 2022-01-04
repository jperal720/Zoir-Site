import React, { useState } from "react";
import "../styles/contactform.styles.css";

export default function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textBody, setTextBody] = useState("");

  return (
    <div id="contact-form-body">
      <div id="contact-us-text">CONTACT US</div>
      <form id="contact-form-inner-body">
        <div id="name-and-email-fields">
          <input
            type="text"
            id="name_input"
            className="textfield"
            name="nameinput"
            placeholder="Name"
            onChange={(text) => {
              setName(text.target.value);
            }}
          />
          <input
            type="text"
            id="email_input"
            className="textfield"
            name="emailinput"
            placeholder="Email"
            onChange={(text) => {
              setEmail(text.target.value);
            }}
          />
        </div>
        <textarea
          type="text"
          className="textfield"
          id="email_body"
          name="emailbody"
          onChange={(text) => {
            setTextBody(text.target.value);
          }}
        />
        <input type="submit" id="submit_button" value="Send" />
      </form>
    </div>
  );
}
