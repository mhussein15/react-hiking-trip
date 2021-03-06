import _data from "./data";
import { useState } from "react";
import TripCard from "./Components/TripCard";
import Routes from "./Components/Routes";
import "mdb-ui-kit/css/mdb.min.css";
import Navbar from "./Components/Navbar";
function App() {
  const [trips, setTrips] = useState(_data);
  const [query, setQuery] = useState("");
  const [range, setRange] = useState([0]);
  const [difficulty, setDiffculity] = useState("");

  const TripView = trips
    .filter((trip) =>
      difficulty === "" ? trip : trip.difficulty === difficulty
    )
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .filter((trip) => trip.length >= range)
    .map((trip) => <TripCard trip={trip} />);

  return (
    <>
      <Navbar setQuery={setQuery} />
      <Routes
        trips={TripView}
        setRange={setRange}
        range={range}
        difficulty={difficulty}
        setDiffculity={setDiffculity}
      />
    </>
  );
}

export default App;
