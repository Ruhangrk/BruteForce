import React from "react";
import "./upComingEvent.scss";
import CardComponent from "./Card";

const UpcomingEvent = () => {
  return (
    <div className="MainUpContainer">
      <div className="UpComingContainer">
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
          <CardComponent
            name="Hack-A-thon"
            description="codeshows Wed developmemt HackAthon-1"
            time="8th April"
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
