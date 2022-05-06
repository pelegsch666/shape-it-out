import { NavLink } from 'react-router-dom';
import levels from '../../data/levels';
import './LevelsNav.css';
import { v4 } from 'uuid';
import LevelTab from './LevelTab';

function LevelsNav() {
  return (
    <nav>
      {levels.map((value, index) => {
        return (
          <NavLink
            key={v4()}
            to={`/level-${index + 1}`}
            style={{ textDecoration: 'none' }}
          >
            <LevelTab>Level {index + 1}</LevelTab>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default LevelsNav;
