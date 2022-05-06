import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import LevelsNav from './components/LevelsNav';
import LevelTemplate from './components/LevelTemplate';
import targetsArray from './data/targetsArray';

const initStylesUser = {
  width: 80,
  height: 80,
  'border-radius': 0,
  red: 24,
  green: 24,
  blue: 24,
  'border-top': 0,
  'border-right': 0,
  'border-bottom': 0,
  'border-left': 0,
};

function App() {
  const [stylesUser, setStylesUser] = useState(initStylesUser);
  const [stylesTarget, setStylesTarget] = useState(targetsArray[0]);

  function isEqual(shape1, shape2) {
    return JSON.stringify(shape1) === JSON.stringify(shape2);
  }

  useEffect(() => {
    isEqual(stylesUser, stylesTarget);
    console.log(isEqual(stylesUser, stylesTarget));
  }, [stylesUser]);

  return (
    <>
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
            <Route
              path=":level"
              element={
                <LevelTemplate
                  stylesUser={stylesUser}
                  setStylesUser={setStylesUser}
                  stylesTarget={stylesTarget}
                  setStylesTarget={setStylesTarget}
                  initStylesUser={initStylesUser}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
