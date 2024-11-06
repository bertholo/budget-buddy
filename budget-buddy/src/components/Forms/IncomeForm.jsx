import { useState, useEffect } from 'react'
import { Form, Button, InputGroup, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useGlobalContext } from '../../context/globalContext';
import './FormStyles.scss'

function IncomeForm() {

    const { addIncome, error, setError } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: null,
        category: '',
        description: '',

    });

    const { title, amount, date, category, description } = inputState;

    const handleInput = (name) => e => {

        let inputValue = e.target.value;

        inputValue = inputValue.replace(/[!@#$%^&*()\-_<>?:;'"\\]/g, '');
        
        setInputState({ ...inputState, [name]: inputValue })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const incomeData = {
            ...inputState,
            amount: parseFloat(inputState.amount),
        };

        try {
            addIncome(incomeData)
            setInputState({
                title: '',
                amount: '',
                date: null,
                category: '',
                description: '',
            });
        } catch (error) {
            console.error('Error adding income:', error)
        }
    }

    useEffect(() => {
        if(error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 10000);
            return () => clearTimeout(timer)
        }
    }, [error, setError]);

    const handleDismiss = () => {
        setError(null);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger" onClose={handleDismiss} dismissible>{error}</Alert>}
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                        <Form.Control
                            required
                            type="text"
                            value={title}
                            name={'title'}
                            placeholder="Income Title"
                            onChange={handleInput('title')}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">$</InputGroup.Text>
                        <Form.Control
                            required
                            value={amount}
                            type="text"
                            name={'amount'}
                            placeholder={'Salary Amount'}
                            onChange={handleInput('amount')}
                        />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text id="basic-addon3">Date</InputGroup.Text>
                        <DatePicker
                            required
                            name='date'
                            id='date'
                            placeholderText='Enter A Date'
                            selected={date}
                            dateFormat="dd/MM/yyyy"
                            onChange={(date) => {
                                setInputState({ ...inputState, date: date })
                            }}
                            className='form-control'
                            popperClassName="datepicker-popper"
                            autoComplete="off"
                        />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                        <InputGroup.Text id="basic-addon3">Options</InputGroup.Text>
                        <Form.Select
                            required
                            value={category}
                            name="category"
                            id="category"
                            onChange={handleInput('category')}
                            aria-label='options'>
                            <option value="" disabled >Select Option</option>
                            <option value="salary">Salary</option>
                            <option value="freelancing">Freelancing</option>
                            <option value="investments">Investiments</option>
                            <option value="stocks">Stocks</option>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="bank">Bank Transfer</option>
                            <option value="youtube">Youtube</option>
                            <option value="other">Other</option>
                        </Form.Select>
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Description</InputGroup.Text>
                        <Form.Control
                            as="textarea"
                            aria-label="Description"
                            value={description}
                            name='description'
                            placeholder='Add a description'
                            onChange={handleInput('description')}
                        />
                    </InputGroup>
                    <InputGroup className="btn-sub">
                        <Button
                            type='submit'
                            name={'Add Income'}
                        >
                            Add Income
                        </Button>
                    </InputGroup>
               
        </Form>

    )
}

export default IncomeForm;