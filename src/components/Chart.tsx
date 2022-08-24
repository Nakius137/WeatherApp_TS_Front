import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import useAppContext from "../hooks/useContext";
import { KintoC } from "../shared/temperatureConvert";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart: React.FC = () => {
  const { contextValues } = useAppContext();
  const { weathers, date } = contextValues;

  const chartData = {
    labels: date,
    datasets: [
      {
        label: "Temperatura długoterminowa",
        data: weathers.map(({ temp }) => KintoC(temp)),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return <Line data={chartData} />;
};
