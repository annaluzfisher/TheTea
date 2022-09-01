
import NavBar from "./components/NavBar";
import NavRight from "./components/NavRight";
import { restoreCSRF } from "./store/csrf";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Share from "./components/Share/index";
import Form from "./components/Form/Form";
import { Switch, Route} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  if (sessionStorage.getItem('X-CSRF-Token') === null){
    restoreCSRF();
  }


  console.log("Welcome * ~ Happy you're here ~")

  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <NavRight />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Share" component={Share} />
          <Route exact path="/Form" component={Form} />
        </Switch>
      </div>
     <About/>
    </div>
  );
}

export default App;
// visible && 