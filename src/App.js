import { useState,useEffect } from "react";
import './App.css';
import Board from './components/Board';
import ToolsPanel from './components/ToolsPanel';
import {BrowserRouter, Route, Routes,useParams} from "react-router-dom"
import LevelsNav from "./components/LevelsNav";
import targetsArray from "./data/targetsArray";

const initStylesUser = {width:80,height:80,radius:0,color:'Salmon'}



function App() {
  const [stylesUser, setStylesUser] = useState(initStylesUser)
  const [stylesTarget, setStylesTarget] = useState(targetsArray[1])
  const {level} = useParams();
  console.log(level)

  function isEqual(shape1, shape2) {
   return JSON.stringify(shape1) === JSON.stringify(shape2) 
  }

  useEffect(()=> {
    isEqual(stylesUser, stylesTarget)
    console.log(isEqual(stylesUser, stylesTarget))
  },[stylesUser])
 

 
  return (
    <>
    <BrowserRouter>
    <LevelsNav/>
    <Routes>
      <Route path=":level" element={<h2>Level {level}</h2>}/> 
    </Routes>
    <Board stylesUser={stylesUser} stylesTarget={stylesTarget}/>
    <ToolsPanel styles={stylesUser}  setStyles={setStylesUser}/>
    </BrowserRouter>
    </>
    );
}

export default App;
