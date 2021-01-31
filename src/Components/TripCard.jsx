import { Link } from "react-router-dom";

export default function TripCard(props) {
  const { trip } = props;
  return (
    <div class="card mb-3 shadow-5">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={trip.imgURL} alt="..." class="img-fluid" style={{width:"100%",height:"100%"}} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{trip.name}</h5>
            <p className="card-text"> Location:-{trip.location}</p>
            <p className="card-text">Difficulty :-{trip.difficulty}</p>
            <p className="card-text">Length:- {trip.length}</p>
            <p className="card-text">
              Elevation Changes:-{trip.elevationChange}
            </p>
            <Link to={`/hiking-trips/${trip.slug}`}>
              <button
                type="button"
                class="btn btn-outline-primary ml-auto"
                data-mdb-ripple-color="dark"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
