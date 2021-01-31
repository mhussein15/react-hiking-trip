import data from "../data";
import { useParams, Redirect,Link } from "react-router-dom";
import _ from "lodash";
import ImageRec from "../Components/ImageRec";
export default function TripsDetail() {
  const tripSlug = useParams().tripSlug;
  const trip = data.find((trip) => trip.slug === tripSlug);

  let ordereddata = _.orderBy(data, (o) => o.elevationChange);
  const recommendation = _.sampleSize(ordereddata, 3).map((trip) => (
    <ImageRec trip={trip} />
  ));
  if (!trip) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container justify-content-center mt-5 ">
      <Link to="/hiking-trips/">
        <button
          type="button"
          class="btn btn-outline-danger"
          data-mdb-ripple-color="dark"
        >
          Back
        </button>
      </Link>
      <div className="row mt-3">
        <div className="col-9">
          <h1>{trip.name}</h1>
          <img
            src={trip.imgURL}
            alt=""
            srcset=""
            className="mt-2 img-fluid shadow-2-strong"
          />
        </div>
        <div className="col-3">
          <p className="lead">Recommandation</p>
          {recommendation}
        </div>
      </div>
    </div>
  );
}
