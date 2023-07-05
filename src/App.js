import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {Outlet, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const [btn, setBtn] = useState('light');
  const toggleBtn = (serial)=>{
    setBtn(serial);
  }
  const toggleBtn1 = ()=>{
    if(mode === 'dark'){
      document.body.style.backgroundColor = '#172a21';
      toggleBtn("dark");
      showAlert("Btn-1 has been enabled", "success");
    }
    else{
      showAlert("Switch onto dark mode to activate", "warning");
    }
  }
  const toggleBtn2 = ()=>{
    if(mode === 'dark'){
      document.body.style.backgroundColor = '#2b1e56';
      toggleBtn("dark");
      showAlert("Btn-2 has been enabled", "success");
    }
    else{
      showAlert("Switch onto dark mode to activate", "warning");
    }
  }
  const toggleBtn3 = ()=>{
    if(mode === 'dark'){
      document.body.style.backgroundColor = '#273f2f';
      toggleBtn("dark");
      showAlert("Btn-3 has been enabled", "success");
    }
    else{
      showAlert("Switch onto dark mode to activate", "warning");
    }
  }

  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText = "About Us"/> */}
    <Navbar title = "TextUtils" toggleBtn3 = {toggleBtn3} toggleBtn2 = {toggleBtn2} toggleBtn1 = {toggleBtn1} btn = {btn} mode = {mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3"> 
       <TextForm showAlert = {showAlert} heading = "Enter something to analyze" mode = {mode}/> 
       {/* <About/> */}
       <div id="detail">
        <Outlet/>
       </div>
     </div>
    </>
  );
}

export default App;
