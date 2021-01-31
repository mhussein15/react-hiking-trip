import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home"
import TripsPage from "../Pages/TripsPage"

export default function Routes(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hiking-trips" >
          <TripsPage trips={props.trips} setRange={props.setRange} range={props.range}/>
        </Route>
      </Switch>
    </div>
  );
}
