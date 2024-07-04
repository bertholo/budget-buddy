import moment from 'moment';


export const dateFormat = (date) => {
    return moment(date).format('DD/MM/YYYY')
}

export function getCurrentMonthData(data) {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    return data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
    });
};

export function getMonthlyTotals(data) {
    const monthlyTotals = {};
    data.forEach(item => {
        const transactionDate = new Date(item.date);
        const month = transactionDate.toLocaleString('default', { month: 'short' });
        if (!monthlyTotals[month]) {
            monthlyTotals[month] = 0;
        }
        monthlyTotals[month] += item.amount;
    });
    return monthlyTotals;
}

export function mergeMonthlyData(incomes, expenses) {
    const allMonths = new Set([...Object.keys(incomes), ...Object.keys(expenses)]);
    const sortedMonths = Array.from(allMonths).sort((a, b) => {
        const dateA = new Date(`2024-${a}-01`);
        const dateB = new Date(`2024-${b}-01`);
        return dateA - dateB;
    });

    return sortedMonths.map(month => ({
        month,
        income: incomes[month] || 0,
        expense: expenses[month] || 0,
    }));
}

export const calculateMonthlyBalance = (incomes, expenses) => {
    const incomeTotals = getMonthlyTotals(incomes);
    const expenseTotals = getMonthlyTotals(expenses);

    const allMonths = [...new Set([...Object.keys(incomeTotals), ...Object.keys(expenseTotals)])];

    return allMonths.map(month => ({
        month,
        balance: (incomeTotals[month] || 0) - (expenseTotals[month] || 0)
    }));
};