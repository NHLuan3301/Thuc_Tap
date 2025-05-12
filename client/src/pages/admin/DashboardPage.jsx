import { Apple, Citrus, RectangleHorizontal, Vegan } from "lucide-react";
import React from "react";
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

export default function DashboardPage() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 150)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 150)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      y: {
        ticks: {
          maxTicksLimit: 3,
        },
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <div>
      <div className="shadow rounded-lg p-10 ">
        <div className="flex justify-between items-center m-3 gap-3 ">
          <h2 class="   font-bold text-2xl md:text-4xl">DASHBOARD</h2>
          <div class=" text-sm md:text-base text-[#5C5C5C]">
            <span>Email: Wisdom12348@gmail.com</span>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-2 ">
          <div className="flex flex-col rounded-[30px] bg-gray-100 items-start px-6 py-3 gap-3">
            <RectangleHorizontal size={30} strokeWidth={2.25} />
            <span className="font-semibold text-center !text-5xl md:text-base ">
              123
            </span>
            <span className=" text-center !text-2xl ">text</span>
          </div>
          <div className="flex flex-col rounded-[30px] bg-blue-100 items-start px-6 py-3 gap-3 ">
            <Apple size={30} strokeWidth={2.25} />
            <span className="font-semibold text-center !text-5xl md:text-base ">
              83
            </span>
            <span className="text-center !text-2xl ">text</span>
          </div>
          <div className="flex flex-col rounded-[30px] bg-green-200 items-start px-6 py-3 gap-3 ">
            <Vegan size={30} strokeWidth={2.25} />
            <span className="font-semibold text-center !text-5xl md:text-base ">
              54
            </span>
            <span className=" text-center !text-2xl ">text</span>
          </div>
          <div className="flex flex-col rounded-[30px] bg-red-300 items-start px-6 py-3 gap-3 ">
            <Citrus size={30} strokeWidth={2.25} />
            <span className="font-semibold text-center !text-5xl md:text-base ">
              4
            </span>
            <span className=" text-center !text-2xl ">text</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl shadow mt-8 p-10">
        <h2 className="pt-5 gap-4 font-bold text-2xl md:text-4xl">
          Doanh thu tuần qua
        </h2>
        <div className="w-full !h-[300px] md:h-[500px]">
          <Bar options={options} data={data} className="!h-[300px]" />
        </div>
      </div>
    </div>
  );
}
