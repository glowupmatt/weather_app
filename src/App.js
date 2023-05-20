import { useEffect, useState } from "react";
import { fetchFromAPI, API_KEY } from "./utils";
import "./App.css";
import LoopTwoToneIcon from "@mui/icons-material/LoopTwoTone";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ExtraInfo from "./components/ExtraInfo";
import MainContent from "./components/MainContent";

function App() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [time, setTime] = useState("");
  const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   fetchFromAPI(`info?apikey=${API_KEY}`).then((data) =>
  //     setCountry(data.data.location.country.name)
  //   );

  //   fetchFromAPI(`info?apikey=${API_KEY}`).then((data) =>
  //     setState(data.data.location.region.name)
  //   );

  //   fetchFromAPI(`info?apikey=${API_KEY}`).then((data) =>
  //     setTime(data.data.timezone.current_time)
  //   );
  // }, []);

  // const date = new Date(time);

  // if (!country) return <div>Loading...</div>;

  return (
    <div className="App">
      <div className="background-img"></div>
      <div className="content-container">
        <MainContent
          time={time}
          state={state}
          country={country}
          clicked={clicked}
          setClicked={setClicked}
        />
        <ExtraInfo clicked={clicked} />
      </div>
    </div>
  );
}

export default App;
