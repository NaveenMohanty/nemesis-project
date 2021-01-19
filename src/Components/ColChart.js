import React from "react";
import Base from "./Base";
import { isAuthenticated } from "../auth/auth";

const ColChart = () => {
  return (
    <Base userName={`Hello ${isAuthenticated().name}!`}>
      <h1>hello col chart</h1>
    </Base>
  );
};

export default ColChart;
