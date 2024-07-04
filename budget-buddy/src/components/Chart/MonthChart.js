import React from "react";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import { getCurrentMonthData } from "../../utils/utils";

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);


function MonthChart() {
    const { incomes, expenses } = useGlobalContext();

    const currentMonthIncomes = getCurrentMonthData(incomes);
    const currentMonthExpenses = getCurrentMonthData(expenses);


    let today = new Date();
    let month = today.toLocaleString('default', { month: 'short' });
    const incomeSum = currentMonthIncomes.reduce((sum, income) => sum + income.amount, 0);
    const expenseSum = currentMonthExpenses.reduce((sum, expense) => sum + expense.amount, 0);

    const data = {
        labels: [`${month}`],
        datasets: [
            {
                label: 'Incomes',
                data: [incomeSum],
                backgroundColor: 'green',
                barThickness: 50,
            },
            {
                label: 'Expenses',
                data: [expenseSum],
                backgroundColor: 'red',
                barThickness: 50,
            }
        ]
    };

    const options = {
        scales: {
            x: {
                stacked: false,
            },
            y: {
                beginAtZero: true,
            },
        },
        
    };
    return (
        <Bar data={data} options={options} />
    )
}

export default MonthChart;