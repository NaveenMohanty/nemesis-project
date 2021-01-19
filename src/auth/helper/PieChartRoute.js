import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";

const PieChartRoute = ({ component: Component, ...rest }) => {
  let auth = isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth && auth.role === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PieChartRoute;
