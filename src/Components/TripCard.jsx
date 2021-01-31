export default function TripCard(props) {
  const { trip } = props;
  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
            alt="..."
            class="img-fluid"
          />
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
          </div>
        </div>
      </div>
    </div>
  );
}
