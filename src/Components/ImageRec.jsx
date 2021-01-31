import { Link } from "react-router-dom";
export default function ImageRec(props) {
  return (
    <div class="bg-image ripple" data-mdb-ripple-color="light">
      <img src={props.trip.imgURL} style={{ height: "20%", width: "100%" }} />
      <Link to={`/hiking-trips/${props.trip.slug}`}>
        <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <p class="text-white mb-0 display-4">{props.trip.elevationChange}</p>
          </div>
        </div>
        <div class="hover-overlay">
          <div
            class="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          ></div>
        </div>
      </Link>
    </div>
  );
}
