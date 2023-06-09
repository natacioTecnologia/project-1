import { useState } from 'react';
import './style.css';

function Home() {
  const [counter, setCounter] = useState(0);

  const handleCOunter = ()  => {
    setCounter(counter + 1)
  }
  return (
    <div className="Home">
      <div>Ola</div>
      <button onClick={handleCOunter}>Counter : {counter}</button>
    </div>
  );
}

export default Home;
