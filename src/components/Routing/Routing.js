import { Routes, Route, Outlet } from 'react-router-dom';
import LevelTemplate from '../LevelTemplate/LevelTemplate';

function Routing() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path=":level" element={<LevelTemplate />} />
      </Route>
    </Routes>
  );
}

export default Routing;
