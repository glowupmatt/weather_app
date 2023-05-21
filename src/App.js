import { useEffect, useState } from "react";
import { fetchFromAPI, API_KEY } from "./utils";
import "./App.css";
import ExtraInfo from "./components/ExtraInfo";
import MainContent from "./components/MainContent";

function App() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [time, setTime] = useState("");
  const [clicked, setClicked] = useState(false);
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetchFromAPI(`info?apikey=${API_KEY}`).then((data) => {
      setCountry(data.data.location.country.name);
      setIp(data.data.ip);
      setState(data.data.location.region.name);
      setTime(data.data.timezone.current_time);
    });
  }, []);

  const date = new Date(time);
  const hours = date.getHours();
  const localTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [liveTime, setLiveTime] = useState(new Date(time));

  const afterSunRise = hours >= 8;
  const beforeSunSet = hours < 20;

  if (!country) return <div>Loading...</div>;

  return (
    <div className="App">
      <div
        className={
          afterSunRise && beforeSunSet
            ? "background-img"
            : "background-img-dark"
        }
      ></div>
      <div className="content-container">
        <MainContent
          liveTime={liveTime}
          setLiveTime={setLiveTime}
          beforeSunSet={beforeSunSet}
          afterSunRise={afterSunRise}
          localTime={localTime}
          hours={hours}
          state={state}
          country={country}
          clicked={clicked}
          setClicked={setClicked}
        />
        <ExtraInfo
          state={state}
          country={country}
          afterSunRise={afterSunRise}
          beforeSunSet={beforeSunSet}
          clicked={clicked}
          ip={ip}
        />
      </div>
    </div>
  );
}

export default App;
