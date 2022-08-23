import React from "react";
import { MainData } from "types";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const Chart: React.FC = (data) => {
  //@ts-ignore
  return <Bar data={data} />;
};
