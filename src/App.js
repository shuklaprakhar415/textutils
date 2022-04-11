import './App.css';
// import About from './Components/About';

import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode ('dark');
      document.body.style.backgroundColor = '#1F2933';
      // document.body.style.color = 'white';
    }
    else
    {
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = '#121212';2
    }

  }

  return (

    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">

        <Textbox heading="Enter Text Here" mode={mode}/>
        {/* <About heading="About Us"/> */}
      </div>


    </>
  );
}

export default App;