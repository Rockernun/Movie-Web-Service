import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route> 
    </Switch>
  </Router>;
}

