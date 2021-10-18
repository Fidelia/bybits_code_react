import { connect } from "react-redux";
import "./App.css";
import Login from "./pages/Login";
import PolicyDetails from "./pages/PolicyDetails";

function App({ api }) {
  const { authenticated } = api;

  if (authenticated) return <PolicyDetails />
  else return <Login />
}

export default connect(state => state)(App)
