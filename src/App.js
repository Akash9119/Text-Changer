import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";

import {BrowserRouter as Main, Route, Routes} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState('');

  const showAlert = (message, type) =>  {
          setAlert({
            msg : message,
            type : type
          })
          setTimeout(() => {
            setAlert(null);
          }, 1500);
  }

//   const removeBodyClasses = ()=>{
//     document.body.classList.remove('bg-light')
//     document.body.classList.remove('bg-dark')
//     document.body.classList.remove('bg-warning')
//     document.body.classList.remove('bg-danger')
//     document.body.classList.remove('bg-success')
// }

  const togglemode = (cls) =>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+ cls);
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#00203c';
      showAlert("Dark mode has been enable", "success")
      }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      }
  }

  
  return (
  <>  <Main>
    <Navbar title="Text-Changer" aboutInfo="About Us" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <Routes>
      <Route exact path='/' element={<Textform title="Enter Text Below To Analyze" mode={mode} showAlert={showAlert} />}/>
      <Route exact path='/about' element={<About title="About Text-Changer" mode={mode}/>}/>
    </Routes>
    {/* <Textform title="Enter Text Below To Analyze" mode={mode} showAlert={showAlert} /> */}
    {/* <About title="About Text-Changer" mode={mode}/> */}
  </Main>
  </>
  );
}

export default App;
