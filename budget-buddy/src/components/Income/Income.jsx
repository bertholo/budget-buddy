import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import IncomeItem from '../IncomeItem/IncomeItem';
import IncomeForm from '../Forms/IncomeForm';

function Income() {
  const { getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes()
  }, []);

  return (
    <Container>
      <Row>
        <Container className='d-flex justify-content-center'>
          <h1>Total Income: <span className="text-success">${totalIncome()}</span></h1>
        </Container>
      </Row>
      <Row className='mt-5'>
        <Col xs={12} md={3} lg={3}>
          <IncomeForm />
        </Col>
        <Col>
          <ListGroup>
            {incomes.length === 0 ? (
              <ListGroup.Item>No income records found.</ListGroup.Item>
            ) : (
              incomes.map((income) => {
                const { _id, title, amount, category, date, description, type } = income;
                return (
                  <ListGroup.Item className='custom-items' key={_id}>
                    <IncomeItem
                      id={_id}
                      title={title}
                      amount={amount}
                      category={category}
                      date={date}
                      description={description}
                      type={type}
                      deleteItem={deleteIncome}
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

export default Income;