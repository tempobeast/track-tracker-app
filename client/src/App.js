import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/hello')
    .then((res) => res.json())
    .then((data) => setCount(data.count))
  }, [])

  return ( 
    <h1>Page Count: {count}</h1>
  );
}

export default App;
