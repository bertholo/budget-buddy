import React, { useContext, useState, useCallback } from "react";


const BASE_URL = 'https://budget-buddy-4ekn.onrender.com/api/v1';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);


    const addIncome = async (income) => {
        try {
            const response = await fetch(`${BASE_URL}/income/add-income`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(income)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            getIncomes();
        } catch (error) {
            setError(error.message);
        }
    }

    const getIncomes = useCallback(async () => {
        try {
            const response = await fetch(`${BASE_URL}/income/get-incomes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setIncomes(result.incomes);

        } catch (error) {
            setError(null)
        }
    }, [])

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach(income => {
            totalIncome += income.amount
        });
        return totalIncome;
    }

    const deleteIncome = async (incomeId) => {
        try {
            const response = await fetch(`${BASE_URL}/income/delete-income/${incomeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            getIncomes();

        } catch (error) {
            setError(error.message);
        }
    }

    const addExpense = async (expense) => {
        try {
            const response = await fetch(`${BASE_URL}/expense/add-expense`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(expense)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            getExpenses();
        } catch (error) {
            setError(error.message);
        }
    }

    const getExpenses = useCallback(async () => {
        try {
            const response = await fetch(`${BASE_URL}/expense/get-expenses`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setExpenses(result.expenses)
        } catch (error) {
            setError(null);
        }
    }, [])

    const deleteExpense = async (expenseId) => {
        try {
            const response = await fetch(`${BASE_URL}/expense/delete-expense/${expenseId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            getExpenses();
        } catch (error) {
            setError(error.message);
        }
    }

    const totalExpense = () => {
        let expenseTotal = 0;
        expenses.forEach(expense => {
            expenseTotal += expense.amount;
        });
        return expenseTotal;
    }

    const totalBalance = () => {
        const expense = totalExpense();
        const income = totalIncome();
        const balance = income - expense;
        return balance;
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];

        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        })
        return history;
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            expenses,
            getExpenses,
            addExpense,
            totalExpense,
            deleteExpense,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}