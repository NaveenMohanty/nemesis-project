import React, { useState, useEffect } from "react";
import Base from "./Base";
import { isAuthenticated } from "../auth/auth";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ColChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "column",
    },
    title: {
      text: "Issues Data",
    },
    subtitle: {
      text:
        'Source: <a href="https://api.github.com/repositories/19438/issues">GitHub</a>',
    },
    xAxis: {
      type: "created/updated",
      labels: {
        rotation: 0,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number of Comments",
      },
    },
    legend: {
      enabled: true,
    },
    tooltip: {
      pointFormat: "Comments: <b>{point.y}</b>",
    },
    series: [
      {
        name: "Git Issues",
        data: [],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, "#003399"], // start
              [0.5, "#ffffff"], // middle
              [1, "#3366AA"], // end
            ],
          },
          align: "right",
          format: "{point.y:.1f}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  });
  useEffect(() => {
    fetch("https://api.github.com/repositories/19438/issues")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let colData = [];
        for (let index = 0; index < data.length; index++) {
          let d = {
            name:
              "Issues no.:" +
              data[index].number +
              " | " +
              "Created:" +
              data[index].created_at.slice(0, 10) +
              " | " +
              "Updated:" +
              data[index].updated_at.slice(0, 10),
            y: data[index].comments,
          };
          colData.push(d);
        }
        setOptions({ series: [{ data: colData }] });
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

export default ColChart;
