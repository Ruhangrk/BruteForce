import React from "react";
import "./home.scss";
import logo from "../utils/logo.png";
const Home = () => {
  return (
    <div className="Myhome">
      <div className="MyHomeContainer">
        <div className="MyLogoDescription">
          <div className="MyHomeLogo">
            <img className="HomeLogo" src={logo} />
          </div>
          <div className="HomeDescription">
            Codeshows is a coding club of MNIT Jaipur. Codeshow aims to
            establish a coding culture on campus, reaching every student
            passionate about coding. The club's motto is to
            Create-Build-Innovate. Start scrolling and learn more about
            codeshows.
          </div>
          <div className="HomeAbout">
            Hey Folks! This is an initiative by the students of the college to
            build a coding club that will serve the purpose of providing the
            environment for coders to flourish and shine. This endeavour is not just for creating a culture for
            competitive coding but we also will mentor you in technologies like
            Machine Learning , Web Development , Android App Development and
            many more. So come forward and be a part of CodeShows family.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
