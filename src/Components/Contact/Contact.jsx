import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const [done, setDone] = useState(false);
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

  return (
    <div className="page" id="contact">
      {/* Section Title Starts */}
      <div className="title-section text-left text-sm-center">
        <h2>get in <span>touch</span></h2>
        <span className="title-bg">contact</span>
      </div>
      {/* Section Title Ends */}

      <div className="contact">
        <div className="main-content">
          <div className="container">
            <div className="row">
              {/* Left Side Starts */}
              <div className="col-12 col-lg-4">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
                <p className="open-sans-font mb-3">
                  Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <p className="open-sans-font custom-span-contact position-relative">
                  <i className="fa fa-envelope-open position-absolute"></i>
                  <span className="d-block">mail me</span>
                  oviasuyiosagioduwa@gmail.com
                </p>
                <p className="open-sans-font custom-span-contact position-relative">
                  <i className="fa fa-phone-square position-absolute"></i>
                  <span className="d-block">call me</span>
                  +234 816 294 2636
                </p>
                <ul className="social list-unstyled pt-1 mb-5">
                  <li className="facebook"><a title="Facebook" href="https://www.facebook.com/share/1EAig2MDKD/"><i className="fa fa-facebook"></i></a></li>
                  <li className="twitter"><a title="Twitter" href="https://x.com/codeWithKay"><i className="fa fa-twitter"></i></a></li>
                  <li className="github"><a title="github" target="_blank" href="https://github.com/kelvintechies"><i className="fa fa-github"></i></a></li>
                  <li className="linkedin"><a title="linkedin" target="_blank" href="https://www.linkedin.com/in/osagioduwa-oviasuyi/"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
              {/* Left Side Ends */}

              {/* Contact Form Starts */}
              <div className="col-12 col-lg-8">
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                  <div className="contactform">
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <input type="text" name="from_name" placeholder="YOUR NAME" required />
                      </div>
                      <div className="col-12 col-md-4">
                        <input type="email" name="user_email" placeholder="YOUR EMAIL" required />
                      </div>
                      <div className="col-12 col-md-4">
                        <input type="text" name="subject" placeholder="YOUR SUBJECT" />
                      </div>
                      <div className="col-12">
                        <textarea name="message" placeholder="YOUR MESSAGE" required></textarea>
                        <button type="submit" className="button">
                          <span className="button-text">Send Message</span>
                          <span className="button-icon fa fa-send"></span>
                        </button>
                      </div>
                      <div className="col-12 form-message">
                        <span className="output_message text-center font-weight-600 text-uppercase">
                          {done && "Thanks For Contacting Osas"}
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* Contact Form Ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
