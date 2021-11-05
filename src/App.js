import { Router, useHistory } from "react-router-dom";
import "./App.css";
import ScrollComponent from "./Components/ScrollComponent";
import Routes from "./Routes";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Router history={history}>
        {/* <Auth> */}
        <ScrollComponent />
        <Routes />
        {/* </Auth> */}
      </Router>
    </div>
  );
}

export default App;
