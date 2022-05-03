import { useState,useEffect } from "react";
import './App.css';
import Board from './components/Board';
import ToolsPanel from './components/ToolsPanel';

const initStylesUser = {width:80,height:80,radius:0,color:'Salmon'}
const initStylesTarget = {width:60,height:60,radius:20,color:'Salmon'}


function App() {
  const [stylesUser, setStylesUser] = useState(initStylesUser)
  const [stylesTarget, setStylesTarget] = useState(initStylesTarget)

  function isEqual(shape1, shape2) {
   return JSON.stringify(shape1) === JSON.stringify(shape2) 
  }

  useEffect(()=> {
    isEqual(stylesUser, stylesTarget)
    console.log(isEqual(stylesUser, stylesTarget))
  },[stylesUser])
 

 
  return (
    <>
    <Board stylesUser={stylesUser} stylesTarget={stylesTarget}/>
    <ToolsPanel styles={stylesUser}  setStyles={setStylesUser}/>
    </>
    );
}

export default App;
