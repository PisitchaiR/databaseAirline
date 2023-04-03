import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function App({ airline }: { airline: string }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

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

  const findNumberReservationEachMonth = (airline: string) => {
    let monthData = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };
    airline?.Flight?.map((flight: any) => {
      flight.Reservation.map((reservation: any) => {
        const date = new Date(reservation.createdAt);
        const month = date.getMonth();
        console.log(month);
        switch (month) {
          case 0:
            monthData.January += 1;
            break;
          case 1:
            monthData.February += 1;
            break;
          case 2:
            monthData.March += 1;
            break;
          case 3:
            monthData.April += 1;
            break;
          case 4:
            monthData.May += 1;
            break;
          case 5:
            monthData.June += 1;
            break;
          case 6:
            monthData.July += 1;
            break;
          case 7:
            monthData.August += 1;
            break;
          case 8:
            monthData.September += 1;
            break;
          case 9:
            monthData.October += 1;
            break;
          case 10:
            monthData.November += 1;
            break;
          case 11:
            monthData.December += 1;
            break;
        }
      });
    });
    return [
      monthData.January,
      monthData.February,
      monthData.March,
      monthData.April,
      monthData.May,
      monthData.June,
      monthData.July,
      monthData.August,
      monthData.September,
      monthData.October,
      monthData.November,
      monthData.December,
    ];
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: findNumberReservationEachMonth(airline),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
