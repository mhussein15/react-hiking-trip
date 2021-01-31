import _data from "./data";
import { useState } from "react";
import TripCard from "./Components/TripCard";
import Routes from "./Components/Routes";
import "mdb-ui-kit/css/mdb.min.css";
import Navbar from "./Components/Navbar"
import MainWrapper from "./Components/MainWrapper";
function App() {
  const [trips, setTrips] = useState(_data);
  const [query, setQuery] = useState("");

  const TripView = trips
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .map((trip) => <TripCard trip={trip} />);

  return (
    <>
      <Navbar setQuery={setQuery} />
      <Routes trips={TripView} />
    </>
  );
}

export default App;
