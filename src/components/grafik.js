import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { faker } from "@faker-js/faker";
import useStat from "@/hooks/useStat";

export default function Grafik({ session }) {
  const { data } = useStat();

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1 | 4,

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  const labels = data.labels ? data.labels : [];
  const datasets = data.stat ? data.stat : [];

  const dataset = {
    labels: [""],
    datasets,
    // datasets: [
    //   {
    //     label: data.labels,
    //     data: data.stat,
    //     backgroundColor: faker.color.rgb(),
    //   },
    // ],
  };

  return <Bar options={options} data={dataset} />;
}
