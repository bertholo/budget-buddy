import TopNav from './components/TopNav/TopNav';
import Orb from './components/Orb/Orb';
import Dashboard from './components/Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Transactions from './components/Transactions/Transactions';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';


function App() {

  const [active, setActive] = useState(1);

  const handleActive = (id) => {
    setActive(id);
  }

  const global = useGlobalContext();

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

  const [dbMessage, setDbMessage] = useState("");

  const testDbConnection = async () => {
    try {
      const response = await fetch('/.netlify/functions/connectToDb');
      const data = await response.json();
      setDbMessage(data.message);  // Update state with the response message
    } catch (error) {
      console.error("Error:", error);
      setDbMessage("Failed to connect to the database");
    }
  };

  useEffect(() => {
    testDbConnection();
  }, []);

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
