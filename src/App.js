import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Details from './Details';
import Form from './Form';

function App() {
  const [data1, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/user")
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));

  },[])
  return (
    <>
      {/* <div className="navbar">
        <h1>The filter of the given data</h1>
      </div> */}
      <Form data1={data1} />

    </>
  );
}

export default App;
