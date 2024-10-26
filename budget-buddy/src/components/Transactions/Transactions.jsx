import React, { useEffect } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useGlobalContext } from '../../context/globalContext'
import Chart from '../Chart/Chart';

function Transactions({ active }) {
  const { transactionHistory, getIncomes, getExpenses } = useGlobalContext();
  const [...history] = transactionHistory();
  const [...recentHistory] = transactionHistory().slice(0, 5);

  useEffect(() => {
    getExpenses();
    getIncomes();
  }, [getIncomes, getExpenses])


  if (active === 2) {
    return (
      <Container>
        <Row xs={1} md={2}>
          <Col>
            <ListGroup>
              {history.length === 0 ? (
                <ListGroup.Item>No records found.</ListGroup.Item>
              ) : (
                history.map((item) => {
                  const { _id, title, amount, type } = item;

                  return <ListGroup.Item key={_id} className='d-flex justify-content-between' style={{
                    color: type === 'Expense' ? 'red' : 'green',

                  }}>
                    <h6>{title}</h6><h6>{type === 'Expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}</h6>
                  </ListGroup.Item>
                })
              )}
            </ListGroup>
          </Col>
          <Col>
            <Chart />
          </Col>
        </Row>
      </Container>
    )
  }
  else {
    return (
      <ListGroup>
        {recentHistory.length === 0 ? (
          <ListGroup.Item>No records found.</ListGroup.Item>
        ) : (
          recentHistory.map((item) => {
            const { _id, title, amount, type } = item;

            return <ListGroup.Item key={_id} className='d-flex justify-content-between' style={{
              color: type === 'Expense' ? 'red' : 'green',

            }}>
              <h6>{title}</h6><h6>{type === 'Expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}</h6>
            </ListGroup.Item>
          })
        )}
      </ListGroup>
    )
  }
}

export default Transactions;