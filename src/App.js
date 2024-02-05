import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [activity, setActivity] = useState("");

  useEffect(() => {
     getActivity()
  }, [])

    const getActivity = async () => {
    const response = await fetch (`http://www.boredapi.com/api/activity/ `);
    const data = await response.json();
    console.log(data.activity);
    setActivity(data.activity);
    
  }
  return (
    <div className="App">
      <h1>{activity}</h1>
      <button onClick={getActivity}>Click here to get a new advice</button>
    </div>
  );
}

export default App;
