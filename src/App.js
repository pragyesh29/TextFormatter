import React, { useState } from 'react';
import './App.css';
import './components/Alert'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#17162e';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#17162e';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="Portfolio" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter text to analyze" mode={mode} showalert={showAlert} />
        {/* <About />  */}
      </div>
    </>
  );
}

export default App;
