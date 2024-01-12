import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import heartEmoji from "../../Images/heartemoji.png";
import glasses from "../../Images/glasses.png";
import { motion } from "framer-motion";
// import resume from "../../Images/OviasuyiOsagioduwaResume.pdf";
import resume from "../../Images/Resume/OviasuyiOsagioduwaResume.pdf.pdf";
import { themeContext } from "../../Context";
const Services = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}> My Awesome </span>
        <span> Services </span>
        <span>
          Full Stack Developer with high level experience <br />
          in web designing and development, producing the quality work
        </span>
        <a href={resume} download="Osagioduwa Oviasuyi Resume">
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ backround: "#ABF1FF94" }}></div>
      </div>
      {/* ryt side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={heartEmoji}
            heading={"FrontEnd"}
            detail={"Html, Css, BootStrap, JavaScript, React"}
          />
        </motion.div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Backend"}
            detail={"Php and Mysql, Laravel, Mern Stack, Python,"}
          />
        </div>
        <motion.div
          initial={{ left: "25rem", top: "19rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={glasses}
            heading={"Mobile Software"}
            detail={"Flutter and Dart"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
