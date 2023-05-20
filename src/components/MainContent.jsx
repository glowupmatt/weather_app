import React from "react";
import "./MainContent.css";
import LoopTwoToneIcon from "@mui/icons-material/LoopTwoTone";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const MainContent = ({ time, state, country, setClicked, clicked }) => {
  const onClickHandler = (prev) => {
    setClicked((prev) => {
      return !prev;
    });
  };
  return (
    <div className="main-content">
      <div
        className={
          clicked === true ? "quote-header-active" : "quote-header-inactive"
        }
      >
        <div className="quote">
          <p>
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <LoopTwoToneIcon className="icon" />
        </div>
        <h4>Ada Lovelace</h4>
      </div>
      <div
        className={
          clicked === true ? "time-container-active" : "time-container-inactive"
        }
      >
        <div className="time-container-info">
          <LightModeIcon />
          <p>GOOD MORNING, IT'S CURRENTLY</p>
        </div>
        {/* <h1>{country}</h1> */}
        <h2>
          11:37<span>BST</span>
        </h2>
        <p>IN LONDON, UK</p>
        {/* <p>{date.toLocaleTimeString()}</p> */}
        <div className="extra-info-button">
          <span>More</span>
          <div
            onClick={onClickHandler}
            className={clicked === true ? "" : "arrow-circle-active"}
          >
            <ExpandCircleDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
