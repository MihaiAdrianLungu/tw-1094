import { useEffect, useState, useCallback } from 'react'
import './App.css';
import Order from './Order';
import useFetch from './useFetch';

function App() {
  const [contor, setContor] = useState(0);
  // const [data, setData] = useState([]);
  // const [name, setName] = useState('');

  // const fetchData = useCallback(async () => {
  //   const result = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const response = await result.json();

  //   setData(response);
  // }, [])

  const {orders, error} = useFetch('https://jsonplaceholder.typicode.com/todos');

  if(error) {
    return (<div>{error}</div>)
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <div className="">
        {contor}
        <button onClick={() => setContor(contor + 1)}>Increment</button>
        {/* <input type='text' name='name' onChange={(e) => setName(e.target.value)} /> */}
        {orders?.map(el => (
          <Order order={el} key={el.id} />
        ))}
    </div> 
  );
}

export default App;
