import React, { useEffect } from 'react'
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import ExpenseForm from '../Forms/ExpenseForm';
import IncomeItem from '../IncomeItem/IncomeItem';
import { useGlobalContext } from '../../context/globalContext';

function Expenses() {
  const { getExpenses, deleteExpense, totalExpense, expenses } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <Container>
      <Row>
        <Container className='d-flex justify-content-center'>
          <h1>Total Expense: <span className="text-danger">${totalExpense()}</span></h1>
        </Container>
      </Row>
      <Row className='mt-5'>
        <Col xs={12} md={3} lg={3}>
          <ExpenseForm />
        </Col>
        <Col>
          <ListGroup>
            {expenses.length === 0 ? (
              <ListGroup.Item>No expense records found.</ListGroup.Item>
            ) : (
              expenses.map((expense) => {
                const { _id, title, amount, category, date, description, type } = expense;
                return (
                  <ListGroup.Item key={_id}>
                    <IncomeItem
                      id={_id}
                      title={title}
                      amount={amount}
                      category={category}
                      date={date}
                      description={description}
                      type={type}
                      deleteItem={deleteExpense}
                    />
                  </ListGroup.Item>
                );
              })
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Expenses