import React, { useEffect } from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { useGlobalContext } from '../../context/globalContext';
import Transactions from '../Transactions/Transactions';
import MonthChart from '../Chart/MonthChart';
import BalanceChart from '../Chart/BalanceChart';

function Dashboard() {

  const { totalExpense, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

  useEffect(() => {
    getIncomes()
    getExpenses()
  }, [])


  return (
    <Container className='overflow-auto'>
      <Row lg={2} className='mt-4'>
        <Col className='my-bg'>
          <h2>Balance Chart</h2>
          <BalanceChart />
        </Col>
        <Col>
          <h2>Recent Transactions</h2>
          <Transactions />
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col xs={12} lg={8}>
          <Row>
            <Col>
              <h2 className='my-bg'>Total Income: <span className="text-success">${totalIncome()}</span></h2>
            </Col>
            <Col>
              <h2 className='my-bg'>Total Expense: <span className="text-danger">${totalExpense()}</span></h2>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <h2 className='my-bg'>Total Balance: <span className="text-primary">${totalBalance()}</span></h2>
            </Col>
          </Row>
        </Col>
        <Col className='my-bg'>
        <MonthChart />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;