import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: { color: "#374151" },
      grid: { display: false },
    },
    y: {
      ticks: { color: "#374151" },
      grid: { display: false },
    },
  },
};

const CurrentPowerChart = ({
  className = "",
  title = "",
  labels = [],
  dataPoints = [],
  barColor = "rgba(75, 192, 192, 0.6)", // Bar color
  bgColor = "rgba(75, 192, 192, 1)", // Border color
}) => {
  const hasData =
    Array.isArray(dataPoints) &&
    dataPoints.some((val) => val !== null && val !== undefined && val !== 0);

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: dataPoints,
        borderColor: barColor,
        backgroundColor: bgColor,
      },
    ],
  };

  return (
    // <div
    //   className={`bg-white rounded-lg shadow-xl w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] h-auto border border-gray-200 p-4 hover:shadow-2xl transition-all duration-300 ${className}`}
    // >
    //   <h4 className="text-gray-700 font-bold">{title}</h4>
    //   {hasData == true ?(
    //     <div className="w-full aspect-[2/1] mt-6 h-[350px]">
    //       <Bar data={data} options={options} />
    //     </div>
    //   ):(
    //     <p className="text-gray-500 text-lg justify-center font-medium">No data found</p>
    //   )}
    // </div>

    <div
    className={`bg-white rounded-lg shadow-xl w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] h-auto border border-gray-200 p-4 hover:shadow-2xl transition-all duration-300 ${className}`}
  >
    <h4 className="text-gray-700 font-bold">{title}</h4>

    <div className="w-full aspect-[2/1] mt-6 h-[350px] flex items-center justify-center">
      {hasData ? (
        <Bar data={data} options={options} />
      ) : (
        <p className="text-gray-500 text-lg font-medium">Data Not Found</p>
      )}
    </div>
  </div>
  );
};

export default CurrentPowerChart;
