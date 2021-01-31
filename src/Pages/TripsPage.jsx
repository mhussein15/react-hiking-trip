import { Range } from "react-range";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useHistory, Link } from "react-router-dom";
export default function TripsPage(props) {
  const { trips, setRange, range } = props;
  const handleDiffculty = (opt) => {
    props.setDiffculity(opt);
  };
  return (
    <div className="container  mt-5">
      <Range
        step={0.1}
        min={0}
        max={120}
        values={range}
        onChange={(range) => setRange(range)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "30px",
              width: "30px",
              borderRadius: "5px",
              backgroundColor: "#39C0ED",
            }}
          />
        )}
      />

      <h4 className="text-center mt-5">{range} km</h4>
      <Link
        to={`/hiking-trips/${props.difficulty}`}
        onClick={() => handleDiffculty("easy")}
      >
        <button
          type="button"
          class="btn btn-outline-primary ml-auto"
          data-mdb-ripple-color="dark"
        >
          Easy
        </button>
      </Link>
      <Link
        to={`/hiking-trips/${props.difficulty}`}
        onClick={() => handleDiffculty("medium")}
      >
        <button
          type="button"
          class="btn btn-outline-primary ml-auto"
          data-mdb-ripple-color="dark"
        >
          Medium
        </button>
      </Link>
      <Link
        to={`/hiking-trips/${props.difficulty}`}
        onClick={() => handleDiffculty("hard")}
      >
        <button
          type="button"
          class="btn btn-outline-primary ml-auto"
          data-mdb-ripple-color="dark"
        >
          Hard
        </button>
      </Link>
      <Link
        to={`/hiking-trips/${props.difficulty}`}
        onClick={() => handleDiffculty("")}
      >
        <button
          type="button"
          class="btn btn-outline-primary ml-auto"
          data-mdb-ripple-color="dark"
        >
          Reset
        </button>
      </Link>
      <div className="m-5">{trips}</div>
    </div>
  );
}
