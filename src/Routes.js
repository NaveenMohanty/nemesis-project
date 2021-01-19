import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import ColChartRoute from "./auth/helper/ColChartRoute";
import PieChartRoute from "./auth/helper/PieChartRoute";
import ColChart from "./Components/ColChart";
import PieChart from "./Components/PieChart";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <ColChartRoute path="/colchart" exact component={ColChart} />
        <PieChartRoute path="/piechart" exact component={PieChart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
