import { NavLink, Outlet } from 'react-router-dom';
import targetsArray from '../data/targetsArray';
import styled from 'styled-components';
import './LevelsNav.css';
import { v4 } from 'uuid';

const Level = styled.span`
  padding: 4px;
  color: black;
  background-color: aliceblue;
`;

function LevelsNav() {
  return (
    <nav>
      {targetsArray.map((value, index) => {
        return (
          <NavLink
            key={v4()}
            to={`/${index + 1}`}
            style={{ textDecoration: 'none' }}
          >
            <Level>Level {index + 1}</Level>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default LevelsNav;
