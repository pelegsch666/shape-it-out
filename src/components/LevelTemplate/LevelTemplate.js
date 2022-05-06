import { useParams } from 'react-router-dom';

import Board from '../Board/Board';
import ToolsPanel from '../ToolsPanel/ToolsPanel';

import { useEffect, useContext } from 'react';
import StylesContex from '../../data/StylesContex';

function LevelTemplate() {
  const { level } = useParams();
  const testContext = useContext(StylesContex);

  useEffect(() => {
    setStylesTarget(targetsArray[level - 1]);
    setStylesUser(initStylesUser);
  }, [level]);

  return (
    <>
      <h1>Welcome to level {level}</h1>
      <Board />
      <ToolsPanel />
    </>
  );
}

export default LevelTemplate;
