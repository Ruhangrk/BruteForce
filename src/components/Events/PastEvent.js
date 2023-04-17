import React from "react";
import "./PastEvent.scss";
import CardComponent from "./Card";

const UpcomingEvent = () => {
  return (
    <div className="MainPastContainer">
      <div className="PastContainer">
        <div className="MainContainer">
          <CardComponent
            name="Contest"
            description="codeshows conding constest-2"
            time="2nd April"
          />
          <CardComponent
            name="Hack-A-thon"
            description="codeshows Wed developmemt HackAthon-1"
            time="8th April"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
