import { useState, useEffect, createContext } from 'react';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import LevelsNav from './components/LevelsNav';
import LevelTemplate from './components/LevelTemplate/LevelTemplate';

import defaultStyles from './data/defaultStyles';

import { isEqual } from './data/helpers';

import StylesContex from './data/StylesContex';

function App() {
  const [stylesUser, setStylesUser] = useState(defaultStyles);
  const [stylesTarget, setStylesTarget] = useState(defaultStyles);

  useEffect(() => {
    isEqual(stylesUser, stylesTarget);
    // TODO: create some component for result
    console.log(isEqual(stylesUser, stylesTarget));
  }, [stylesUser]);

  return (
    <>
      <StylesContex.Provider
        stylesUser={stylesUser}
        setStylesUser={setStylesUser}
        stylesTarget={stylesTarget}
        setStylesTarget={setStylesTarget}
        defaultStyles={defaultStyles}
      >
        <BrowserRouter>
          <LevelsNav />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <h1>Shape it OUT</h1>
                  <Outlet />
                </>
              }
            >
              <Route path=":level" element={<LevelTemplate />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StylesContex.Provider>
    </>
  );
}

export default App;
