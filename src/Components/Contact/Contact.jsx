import React, { useContext } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { themeContext } from "../../Context";
const Contact = () => {
  const [done, setDone] = useState(false);
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s50sbsp",
        "template_gf25qsa",
        form.current,
        "vyI1imVDb8fmNJQK6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // thRYFSzvDYd08Fvgq

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}> Get in Touch </span>
          <span> Contact Me </span>
          <div className="blur s-blur" style={{ background: "#abf1FF94" }}>
            <div></div>
          </div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <div
            className="blur c-blur"
            style={{ background: "var(--purple)" }}
          ></div>
          <span>{done && "Thanks For Contacting Osas"}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
