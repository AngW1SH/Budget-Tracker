export const options = {
  responsive: true,
  maintainAspectRatio: false,
  lineTension: 0.4,
  animation: {
    duration: 0,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

export const initialLabels = [
  {
    name: "Earned",
    color: "#7F56D9",
    backgroundColor: "rgba(127, 86, 217, 0.1)",
    hidden: false,
    data: [40, 29, 10, 40, 39, 80, 60],
  },
  {
    name: "Spent",
    color: "#B692F6",
    backgroundColor: "rgba(182, 146, 246, 0.1)",
    hidden: false,
    data: [40, 39, 10, 40, 39, 80, 20],
  },
];
