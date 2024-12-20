import TopNav from './components/TopNav/TopNav';
import Orb from './components/Orb/Orb';
import Dashboard from './components/Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Transactions from './components/Transactions/Transactions';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';


function App() {

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://budget-buddy-4ekn.onrender.com')
        .then(response => {
          if (!response.ok) {
            console.error('Error pinging the server');
          }
        })
        .catch(error => console.error('Network error:', error));
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  const [active, setActive] = useState(1);

  const handleActive = (id) => {
    setActive(id);
  }

  const displayData = () => {
    switch (active) {
      case (1):
        return <Dashboard active={active} />
      case (2):
        return <Transactions active={active} />
      case (3):
        return <Income />
      case (4):
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  return (
    <Container className='m-0 p-0' fluid>
      <TopNav handleActive={handleActive} fluid />
      <Container>
        {displayData()}
      </Container>
      <Orb />
    </Container>
  )
}

export default App;
