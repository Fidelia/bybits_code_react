import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

function PrivateRoute({ children, authenticated, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      return authenticated === true
        ? children
        : <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }} />
    }} />
  )
}

export default connect(state => state.api)(PrivateRoute);