import React, { useState, useEffect } from "react";
import Base from "./Base";
import { isAuthenticated } from "../auth/auth";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = () => {
  const [options, setOptions] = useState({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "GitHub Nemesis Project",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Comments",
        colorByPoint: true,
        data: [
          {
            name: "Isse no.:4354",
            y: 61.41,
          },
          {
            name: "Internet Explorer",
            y: 11.84,
          },
          {
            name: "Firefox",
            y: 10.85,
          },
          {
            name: "Edge",
            y: 4.67,
          },
          {
            name: "Safari",
            y: 4.18,
          },
          {
            name: "Other",
            y: 7.05,
          },
        ],
      },
    ],
  });

  useEffect(() => {
    fetch("https://api.github.com/repositories/19438/issues")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let pieData = [];
        for (let index = 0; index < data.length; index++) {
          let d = {
            name: "Issues no.:" + data[index].number,
            y: data[index].comments,
          };
          pieData.push(d);
          console.log(data[index].number);
        }
        setOptions({ series: [{ data: pieData }] });
      });
  }, []);
  return (
    <Base userName={`Hello ${isAuthenticated().name}!`}>
      <div style={{ padding: "50px 100px" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </Base>
  );
};

export default PieChart;
