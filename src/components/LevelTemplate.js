import { useParams } from 'react-router-dom';

import Board from './Board';
import ToolsPanel from './ToolsPanel';

import targetsArray from '../data/targetsArray';
import { useEffect } from 'react';

function LevelTemplate({
  stylesUser,
  stylesTarget,
  setStylesUser,
  setStylesTarget,
  initStylesUser,
}) {
  const { level } = useParams();

  useEffect(() => {
    setStylesTarget(targetsArray[level - 1]);
    setStylesUser(initStylesUser);
  }, [level]);

  return (
    <>
      <h1>Welcome to level {level}</h1>
      <Board stylesUser={stylesUser} stylesTarget={stylesTarget} />
      <ToolsPanel stylesUser={stylesUser} setStylesUser={setStylesUser} />
    </>
  );
}

export default LevelTemplate;
