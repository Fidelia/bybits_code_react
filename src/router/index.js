import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import PolicyDetails from "../pages/PolicyDetails";

export function Routes() {
  return (
    <Router>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path='/policy-details'>
          <PolicyDetails />
        </PrivateRoute>
    </Router>
  );
}
