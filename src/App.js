import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useParams
} from "react-router-dom";

import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** App -> { Nav, DogList, DogDetails } */

function App({ dogs }) {
  const { name } = useParams();
  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(d => d.name)} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
          </Route>
          <Route path="/dogs/:name">
            <DogDetails dog={name} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
