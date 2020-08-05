import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>"React 사용하여 웹서비스 만들어보기"</span>
      <span>- 박관용</span>
    </div>
  );
}

export default About;
