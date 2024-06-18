import React, { useState } from "react";
import "./styles.css";


import TabName from "./TabsPages/TabsName";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  return (
    <div className="container">
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </li>
        <li
          className={`tabs ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </li>
        <li
          className={`tabs ${getActiveClass(4, "active-tabs")}`}
          onClick={() => toggleTab(4)}
        >
          Tab 4
        </li>

        <li
          className={`tabs ${getActiveClass(5, "active-tabs")}`}
          onClick={() => toggleTab(5)}
        >
          Tab 5
        </li>
        
      </ul>


      <div className="content-container">
        <div className={`content ${getActiveClass(1, "active-content")}`}>
          <TabName/>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <h2>Ipsum</h2>
        </div>
        <div className={`content ${getActiveClass(3, "active-content")}`}>
          <h2>Dolor</h2>
        </div>
        <div className={`content ${getActiveClass(4, "active-content")}`}>
          <h2>Dolor4</h2>
        </div>
        <div className={`content ${getActiveClass(5, "active-content")}`}>
          <h2>Dolor5</h2>
        </div>
      </div>
    </div>
  );
};

export default Tab;