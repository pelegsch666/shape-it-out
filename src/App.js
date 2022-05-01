import { useState,useEffect } from "react";
import './App.css';
import Board from './components/Board';
import ToolsPanel from './components/ToolsPanel';

const initState = {width:80,height:80,radius:0,color:'Salmon'}

function App() {
  const [styles, setStyles] = useState(initState)

  
 

 
  return (
    <>
    <Board styles={styles}/>
    <ToolsPanel styles={styles} setStyles={setStyles}/>
    </>
    );
}

export default App;
