import data from "../data"
import { useParams, Redirect } from "react-router-dom";

export default function TripsDetail() {
    const tripId = useParams().tripId;
  const tripA = data.find(
    (trip) => trip.id === tripId
  );
  console.log(data);
    return(
        <div>
            <h1>{tripA.name}</h1>
        </div>
    )
}