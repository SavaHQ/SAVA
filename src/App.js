import { Router, useHistory } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Router history={history}>
        {/* <Auth> */}

        <Routes />
        {/* </Auth> */}
      </Router>
    </div>
  );
}

export default App;
