import React, { useEffect, useState } from "react";
import "./ExtraInfo.css";
import styled from "styled-components";
import { fetchFromWorldTimeAPI } from "../utils";

const ExtraInfo = ({
  ip,
  afterSunRise,
  beforeSunSet,
  clicked,
  state,
  country,
}) => {
  const [dayOfYear, setDayOfYear] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [weekNumber, setWeekNumber] = useState(null);

  useEffect(() => {
    fetchFromWorldTimeAPI(ip).then((data) => {
      setDayOfYear(data.day_of_year);
      setDayOfWeek(data.day_of_week);
      setWeekNumber(data.week_number);
    });
  });

  const info = [
    {
      title: "CURRENT TIMEZONE",
      info: `${state}/${country}`,
    },
    {
      title: "DAY OF THE YEAR",
      info: `${dayOfYear}`,
    },
    {
      title: "DAY OF THE WEEK",
      info: `${dayOfWeek}`,
    },
    {
      title: "WEEK NUMBER",
      info: `${weekNumber}`,
    },
  ];

  const BackgroundColor = styled.div`
    background-color: ${afterSunRise && beforeSunSet
      ? "rgba(255, 255, 255, 0.75)"
      : "rgba(0, 0, 0, 0.5)"};

    color: ${afterSunRise && beforeSunSet
      ? "rgba(0, 0, 0, 0.5)"
      : "rgb(255, 255, 255)"};
  `;
  return (
    <BackgroundColor
      className={
        clicked
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
    </BackgroundColor>
  );
};

export default ExtraInfo;
