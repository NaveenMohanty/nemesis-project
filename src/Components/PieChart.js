import React from "react";
import Base from "./Base";
import { isAuthenticated } from "../auth/auth";

const PieChart = () => {
  return (
    <Base userName={`Hello ${isAuthenticated().name}!`}>
      <h1>hello pie</h1>
    </Base>
  );
};

export default PieChart;
