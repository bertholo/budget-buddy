import React from 'react';
import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import { calculateMonthlyBalance } from '../../utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css';

function BalanceChart() {
  const { incomes, expenses } = useGlobalContext();

  const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  const monthlyBalance = calculateMonthlyBalance(incomes, expenses);
  const orderedMonthlyBalance = monthlyBalance.sort((a,b) => {
    return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
  });
  const labels = orderedMonthlyBalance.map(item => item.month);
  const data = orderedMonthlyBalance.map(item => item.balance);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Monthly Balance',
        data,
        backgroundColor: 'blue',
        borderColor: 'blue',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default BalanceChart;
