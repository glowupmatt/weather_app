import React, { useEffect, useState } from "react";
import "./MainContent.css";
import LoopTwoToneIcon from "@mui/icons-material/LoopTwoTone";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { fetchRandomQuote } from "../utils";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const MainContent = ({
  liveTime,
  setLiveTime,
  afterSunRise,
  beforeSunSet,
  hours,
  localTime,
  state,
  country,
  setClicked,
  clicked,
}) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchRandomQuote().then((data) => setQuote(data[0].content));
    fetchRandomQuote().then((data) => setAuthor(data[0].author));
  }, []);

  useEffect(() => {
    setInterval(() => setLiveTime(new Date()), 1000);
  }, [setLiveTime]);

  const onClickHandler = () => {
    setClicked((prev) => {
      return !prev;
    });
  };

  return (
    <div className={clicked ? "main-content-active" : "main-content"}>
      <div
        className={clicked ? "quote-header-active" : "quote-header-inactive"}
      >
        <div className="quote">
          <p>{quote}</p>
          <LoopTwoToneIcon
            onClick={() => {
              fetchRandomQuote().then((data) => {
                setQuote(data[0].content);
                setAuthor(data[0].author);
              });
            }}
            className="icon"
          />
        </div>
        <h4>{author}</h4>
      </div>
      <div className="time-container-incButton">
        <div
          className={
            clicked ? "time-container-active" : "time-container-inactive"
          }
        >
          <div className="time-container-info">
            {afterSunRise && beforeSunSet ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}

            <p>
              <span>
                {afterSunRise && beforeSunSet ? "GOOD MORNING" : "GOOD EVENING"}
              </span>
              , IT'S CURRENTLY
            </p>
          </div>

          <h2>
            {liveTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h2>
          <h1>
            <span>{state}</span>, {country}
          </h1>
        </div>
        <div className="extra-info-button">
          <span>More</span>
          <div
            onClick={onClickHandler}
            className={clicked ? "" : "arrow-circle-active"}
          >
            <ExpandCircleDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
