import {registerStepOneContainer as RegisterStepOneContainer} from "./components/user/register/registerStepOneContainer";
import {resourceUtilizationContainer as ResourceUtilizationContainer} from "./resourceUtilization/resourceUtilizationContainer";
import {Route,BrowserRouter as Router} from "react-router-dom";
import {showErrors as ShowErrors} from "./components/UtilComp/wiseMessageContainer";

export const routes = () => (

  <Router>
    <div>
      <ShowErrors />
      {/*<Switch>*/}
      {/*<Route path="/" component={Root} />*/}
      <Route path="/register" component={RegisterStepOneContainer}  />
      <Route path="/someOther/:param/view" component={RegisterStepOneContainer}  />
      <Route path="/resourceUtilization" component={ResourceUtilizationContainer}  />

      {/*</Switch>*/}
    </div>
  </Router>
);
