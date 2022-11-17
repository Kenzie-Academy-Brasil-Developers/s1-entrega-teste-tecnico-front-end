import Calculate from './page/calculate';
import { Switch, Route } from "react-router-dom";
import ErrorPage from './page/error';

function App() {


  return (

    <Switch>
      <Route exact path={"/"}>
          <Calculate />
      </Route>

      <Route path={"/error"}>
        <ErrorPage />
      </Route>
  
    </Switch>
  );
}

export default App;
