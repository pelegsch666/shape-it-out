import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import LevelsNav from './components/LevelsNav/LevelsNav';
import Routing from './components/Routing/Routing';

import defaultStyles from './data/defaultStyles';

import { isEqual } from './data/helpers';

import StylesContex from './data/StylesContex';

function App() {
  const [stylesUser, setStylesUser] = useState(defaultStyles);
  const [stylesTarget, setStylesTarget] = useState(defaultStyles);
  const [isEqualState, setIsEqualState] = useState(false);

  useEffect(() => {
    setIsEqualState(isEqual(stylesUser, stylesTarget));
  }, [stylesUser, stylesTarget]);

  return (
    <StylesContex.Provider
      value={{
        stylesUser,
        setStylesUser,
        stylesTarget,
        setStylesTarget,
        defaultStyles,
      }}
    >
      <BrowserRouter>
        <LevelsNav />
        <h1>Shape it OUT</h1>
        {isEqualState ? <h2>Correct!</h2> : <h2>Keep Trying</h2>}
        <Routing />
      </BrowserRouter>
    </StylesContex.Provider>
  );
}

export default App;
