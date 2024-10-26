import React from "react";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import { getMonthlyTotals, mergeMonthlyData } from '../../utils/utils';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
);


function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const incomesMonthlyTotals = getMonthlyTotals(incomes);
    const expensesMonthlyTotals = getMonthlyTotals(expenses);

    const monthlyData = mergeMonthlyData(incomesMonthlyTotals, expensesMonthlyTotals);


    const data = {
        labels: monthlyData.map(entry => entry.month),
        datasets: [
            {
                label: 'Incomes',
                data: monthlyData.map(entry => entry.income),
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: monthlyData.map(entry => entry.expense),
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }

    return (

        <Line data={data} />

    )
}

export default Chart;