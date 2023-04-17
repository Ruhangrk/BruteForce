import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UpcommingEvent from "./UpcomingEvent";
import PastEvent from "./PastEvent";
import CardComponent from "./Card";
// import Sonnet from "../../components/Sonnet";
import "./events.scss";
const Events = () => {
  const [key, setKey] = useState("home");

  return (
    <div className="event-container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        // className="mb-3"
      >
        <Tab eventKey="home" title="Up-Coming Events" id="tab">
          <UpcommingEvent />
        </Tab>
        <Tab eventKey="profile" title="Past Events" id="tab">
          <PastEvent />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Events;
