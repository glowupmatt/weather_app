import { useEffect, useState } from "react";
import { fetchFromAPI } from "./utils";
import "./App.css";

function App() {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchFromAPI(`info?apikey=KuHpLEPsndxzPmoBjpq2UBCpIE8QQt1MNjF7CNga`).then(
      (data) => setCountry(data.data.location.country.name)
    );

    fetchFromAPI(`info?apikey=KuHpLEPsndxzPmoBjpq2UBCpIE8QQt1MNjF7CNga`).then(
      (data) => setState(data.data.location.region.name)
    );
  }, []);

  console.log(country);

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h1>{country}</h1>
      <h2>{state}</h2>
    </div>
  );
}

export default App;
