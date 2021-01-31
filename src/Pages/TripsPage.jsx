import { Range } from "react-range";
export default function TripsPage({ trips, setRange,range }) {
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
              borderRadius:"5px",
              backgroundColor: "#39C0ED",
            }}
          />
        )}
      />
      <h4 className="text-center mt-5">{range} km</h4>
      <div className="m-5">{trips}</div>
    </div>
  );
}
