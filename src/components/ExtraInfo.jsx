import React from "react";
import "./ExtraInfo.css";

const ExtraInfo = ({ clicked }) => {
  const info = [
    {
      title: "CURRENT TIMEZONE",
      info: "Europe/London",
    },
    {
      title: "DAY OF THE YEAR",
      info: "295",
    },
    {
      title: "DAY OF THE WEEK",
      info: "5",
    },
    {
      title: "WEEK NUMBER",
      info: "42",
    },
  ];
  return (
    <div
      className={
        clicked === true
          ? "extra-info-container-active"
          : "extra-info-container-inactive"
      }
    >
      {info.map((info) => {
        return (
          <div className="extra-info-content">
            <p>{info.title}</p>
            <h3>{info.info}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraInfo;
