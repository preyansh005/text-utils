import "./App.css";
import {useState} from 'react'
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#343a40'
    }
  }

  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter The Text" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
