import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";

const ColChartRoute = ({ component: Component, ...rest }) => {
  let auth = isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth && auth.role === 0 ? (
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

export default ColChartRoute;
