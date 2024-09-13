
import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform1 from './component/Textform1';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 const  tooglemode = () => {
    if(mode === 'light'){
      showAlert("dark  mode has been enabed", "sucess");
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = '#fff';
    showAlert("light  mode has been enabed", "sucess");
  }
}
return (
    <>
<Navbar mode={mode} tooglemode={tooglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Textform1  showAlert={showAlert} heading="enter text to analyze" mode ={mode}/>
</div>
{/* <About/> */}
    </>
    )
  }

export default App;
