
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  // Ens\able DArk Mode And Light Mode
  const[mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#052750'
      showAlert('Dark mode has been Enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
const [alert, setAlert] = useState(null);

const showAlert = (message, type) =>{
  setAlert({
    msg: message,
  type: type})

  setTimeout(() => {
    setAlert(null)
  }, 1000);
}

  return (
    <>
    <Router>
    
    <Navbar title = "TextUtils" AboutText = "About TextUtils" home = "Home" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
      <Routes>
          <Route path="/" element={<TextForm heading = "Enter Your Text Here" mode={mode} showAlert={showAlert} />}></Route>
          
          <Route  path="About" element={<About/>}> </Route>
       
      </Routes>

</Router>
</>
  );
}

export default App;
