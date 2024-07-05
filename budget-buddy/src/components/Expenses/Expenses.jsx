import React, { useEffect, useState } from 'react';
import { Container, Col, Row, ListGroup, Spinner, Alert } from 'react-bootstrap';
import ExpenseForm from '../Forms/ExpenseForm';
import IncomeItem from '../IncomeItem/IncomeItem';
import { useGlobalContext } from '../../context/globalContext';

function Expenses() {
  const { getExpenses, deleteExpense, totalExpense, expenses } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        await getExpenses();
      } catch (err) {
        console.error('Error fetching expenses:', err);
        setError('Failed to fetch expenses');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) {
    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className='d-flex justify-content-center align-items-center'>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

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
  );
}

export default Expenses;
