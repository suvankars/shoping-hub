import Home from "./pages/home/Homepage";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
} from "react-router";
import { Link, NavLink } from "react-router-dom";

export const About = () => {
  let history = useHistory();
  let location = useLocation();
  let { slug }: any = useParams();
  console.log(history, "history");
  console.log(location, "location");
  console.log(slug, "params");
  return (
    <div>
      <h3>Hello world</h3>
    </div>
  );
};

export const App = () => {
  return (
    <div>
      <Link to="/go">go there</Link>

      <NavLink to="/about">About</NavLink>
      <NavLink
        to="/faq"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        FAQs
      </NavLink>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/about/:slug">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
