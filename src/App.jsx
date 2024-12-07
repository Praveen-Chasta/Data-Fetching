import { useState, useEffect } from 'react';
import './App.css';

function App() {
 
  const [data, setData] = useState([])
 
  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(e => console.log(e))
  },[])

  return (
    <>
      <div>
       <ul>
         {data.map((item) => (
           <li key = {item.id}>
           <p>title : {item.title}</p>
           <p>Completed : {item.completed ? "Yes" : "No"}</p>
           </li>
         ))}
       </ul>
      </div>
    </>
  );
}

export default App;
