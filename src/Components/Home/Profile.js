import React, { useContext } from "react";
import "./Profile.css";
import Github from "../../Images/Logo/github.png";
import linkedin from "../../Images/Logo/linkedin.png";
import Fb from "../../Images/Logo/basic-rgb-140355715.jpg";
import vector1 from "../../Images/Vector1.png";
import vector2 from "../../Images/Vector2.png";
import glassesimoji from "../../Images/glassesimoji.png";
import me from "../../Images/WhatsApp_Image_2023-06-22_at_16.55.42-removebg-preview.png";
import thumb from "../../Images/thumbup.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { themeContext } from "../../Context";
const Profile = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi, I am</span>
          <span>Oviasuyi Osagioduwa</span>
          <span>
            Full Stack Developer with high level experience in web designing and
            development, producing the quality work
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire Me</button>
        </Link>

        <div className="i-icons">
          <img src={Github} alt />
          <img src={linkedin} alt />
          <img src={Fb} alt />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt />
        <img src={vector2} alt />
        <img src={me} alt />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-25%" }}
          transition={transition}
          src={glassesimoji}
          alt
        />

        <motion.div
          initial={{ top: "-4%", left: "-75%" }}
          whileInView={{ left: "64%" }}
          transition={transition}
          style={{ top: "-4%", left: "64%" }}
          className="floating-div"
        >
          <FloatingDiv image={thumb} txt1="Software" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "1.5rem" }}
          transition={transition}
          style={{ top: "18rem", left: "1.5rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumb} txt1="Mobile" txt2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div>
      </div>
    </div>
    // </div>
  );
};

export default Profile;