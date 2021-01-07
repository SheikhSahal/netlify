 import React from 'react';

import './App.css';
// , { useEffect, useState }
function App() {

  // const [val, setVal] = useState({});

  // useEffect(()=>{
  //   fetch(`/.netlify/functions/hello?name=from new react app`)
  //   .then(res=>res.json())
  //   .then(obj=>setVal(obj))
  // },[])
  return (
    <div className="App">
      Hellow world from there.
      {/* <h3>{val.message}</h3> */}
    </div>
  );
}

export default App;
