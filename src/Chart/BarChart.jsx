import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 1000, 400, 200],
  ["2019", 1170, 460, 250],
  ["2020", 660, 1120, 300],
  ["2021", 1030, 540, 350],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 540, 350],
  ["2024", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  colors:['rgb(85, 61, 222)','rgb(38, 183, 152)','rgb(93, 104, 170)']
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="600px"
      data={data}
      options={options}
    />
  );
}
