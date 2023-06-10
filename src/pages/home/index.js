import { useState } from 'react';
import './style.css';
import { useCallback , memo} from 'react';

const MyButton = memo( function ({handleCOunter}){
  console.log("Renderizou")
  return(
    <div className='MyButton'>
      <button onClick={handleCOunter}>Counter </button>

    </div>
  )
})

function Home() {
  const [counter, setCounter] = useState(0);

  const handleCOunter = useCallback(()  => {
    setCounter((c)=> c + 1)
  }, [])
  return (
    <div className="Home">
      <div>{counter}</div>
      <MyButton handleCOunter={handleCOunter} />
    </div>
  );
}

export default Home;
