import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useGlobalContext } from '../../context/globalContext';
import Transactions from '../Transactions/Transactions';
import MonthChart from '../Chart/MonthChart';
import BalanceChart from '../Chart/BalanceChart';
import '../../styles/_variables.scss';


function Dashboard() {

  const { totalExpense, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [getIncomes, getExpenses])


  return (
    <Container className='overflow-auto'>
      <Row lg={3} className='mt-4'>
        <Col className='my-bg'>
          <h2>Balance Chart</h2>
          <BalanceChart />
        </Col>
        <Col>
          <h2>Recent Transactions</h2>
          <Transactions />
        </Col>
        <Col xs={12} lg={4} className='my-bg'>
          <h3>Current month chart</h3>
          <MonthChart />
        </Col>
      </Row>

      <Row className='mt-4'>
            <Col>
              <h2 className='my-bg'>Total Income: <span className="text-success">${totalIncome()}</span></h2>
            </Col>
            <Col>
              <h2 className='my-bg'>Total Expense: <span className="text-danger">${totalExpense()}</span></h2>
            </Col>
            <Col className='d-flex justify-content-center'>
              <h2 className='my-bg'>Total Balance: <span className="text-primary">${totalBalance()}</span></h2>
            </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;