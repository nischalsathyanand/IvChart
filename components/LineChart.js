import React from "react";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#FE9D01", // this will change the color of the x-axis labels
        font: {
          color: "#FE9D01", // this will change the color of the text in the x-axis labels
          weight: "bold",
        },
      },
    },
    y: {
      ticks: {
        color: "#FE9D01", // this will change the color of the y-axis labels
        font: {
          color: "#FE9D01", // this will change the color of the text in the y-axis labels
          weight: "bold",
        },
      },
    },
  },
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = (scriptData) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (scriptData) {
      const scriptDataArray = scriptData.scriptData;
      let timeStamp = [];
      let iv = [];

      scriptDataArray.map((item) => {
        timeStamp.push(item.timestamp.slice(0, 10));
        iv.push(parseFloat(item.implied_volatility));
      });
      console.log(timeStamp);
      console.log(iv);
      setData({
        labels: timeStamp,
        /*labels: [
          "02-01-2023",
          "03-01-2023",
          "02-01-2023",
          "03-01-2023",
          "04-01-2023",
          "06-01-2023",
        ],*/
        datasets: [
          {
            label: "Implied Volatality",
            data: iv,
            //data: [15.09, 13.62, 15.09, 13.62, 16.16, 12.18],
            borderColor: "rgb(255, 99, 132)",

            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      });
    }
  }, [scriptData]);
  return (
    <div>
      {" "}
      <h2>Line Chart</h2>
      {data && <Line data={data} options={options} />}
    </div>
  );
};

export default LineChart;
