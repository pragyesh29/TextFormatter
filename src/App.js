import React, { useState } from 'react';
import './App.css';
import './components/Alert'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#17162e';
      document.body.style.color = 'white';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#17162e';
    }
  }

  return (
    <>
      <Navbar title="Portfolio" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={"this is alert"} />
      <div className="container">
        <TextForm heading="Enter text to analyze" mode={mode} />
        {/* <About />  */}
      </div>
    </>
  );
}

export default App;
