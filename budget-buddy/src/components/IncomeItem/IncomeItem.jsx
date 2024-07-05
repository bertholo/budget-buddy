import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { dateFormat } from '../../utils/utils';
import { incomeIcon, expenseIcon } from '../../utils/icons';
import {
  CurrencyDollar,
  TrashFill,
  Calendar,
  ChatSquareTextFill
} from 'react-bootstrap-icons';

function IncomeItem({
  id,
  title,
  amount,
  date,
  description,
  deleteItem,
  category,
  type
}) {


  return (
    <Container>
      <Row xs={2} md={3}>
        <Col md={1} className='d-flex justify-content-center align-items-center'>
          {type === 'Expense' ? expenseIcon(category) : incomeIcon(category)}
        </Col>
        <Col xs={6} md={10}>
          <Row>
            <Col>
              <h4>{title}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <CurrencyDollar />
              {amount}
            </Col>
            <Col>
              <Calendar />
              {dateFormat(date)}
            </Col>
            <Col>
              <ChatSquareTextFill />
              {description}
            </Col>
          </Row>
        </Col>
        <Col xs={1} md={1}>
          <Button variant="danger" onClick={() => deleteItem(id)}>
            <TrashFill />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default React.memo(IncomeItem);
