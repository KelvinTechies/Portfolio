import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);

  const darkMode = theme.state.darkMode;
  return (
    <div className="Experience" id="Experience">
      <div className="AchieveMent">
        <div className="circle" style={{ color: darkMode ? "#242049" : "" }}>
          2+
        </div>
        <span>years </span>
        <span>Experience </span>
      </div>
      <div className="AchieveMent">
        <div className="circle" style={{ color: darkMode ? "#242049" : "" }}>
          15+
        </div>
        <span>Completed </span>
        <span>Projects </span>
      </div>
      <div className="AchieveMent">
        <div className="circle" style={{ color: darkMode ? "#242049" : "" }}>
          2+
        </div>
        <span>Companies </span>
        <span>Work </span>
      </div>
    </div>
  );
};

export default Experience;
