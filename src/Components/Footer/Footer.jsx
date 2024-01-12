import React from "react";
import wave from "../../Images/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />

      <div className="f-content">
        <span>oviasuyiosagioduwa@gmail.com</span>
        <div className="f-icons">
          <Insta color="White" size="3rem" />
          <Facebook color="White" size="3rem" />
          <a href="https://github.com/kelvintechies" target="_blank">
            <Github color="White" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/osagioduwa-oviasuyi-576147245/"
            target="_blank"
          >
            <LinkedIn color="White" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
