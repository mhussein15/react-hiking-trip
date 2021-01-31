import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import TripsDetail from "../Pages/TripsDetail";
import TripsPage from "../Pages/TripsPage";

export default function Routes(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hiking-trip/:tripSlug">
          <TripsDetail />
        </Route>
        <Route path="/hiking-trips/:difficulty">
          <TripsPage
            trips={props.trips}
            setRange={props.setRange}
            range={props.range}
            difficulty={props.difficulty}
            setDiffculity={props.setDiffculity}
          />
        </Route>
        <Route path="/hiking-trips">
          <TripsPage
            trips={props.trips}
            setRange={props.setRange}
            range={props.range}
            difficulty={props.difficulty}
            setDiffculity={props.setDiffculity}
          />
        </Route>
      </Switch>
    </div>
  );
}
