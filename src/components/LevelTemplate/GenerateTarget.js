import { generateTarget } from '../../data/helpers';
import { getLevelIndex } from '../../data/helpers';
import levels from '../../data/levels';
import { useContext, useEffect } from 'react';
import StylesContex from '../../data/StylesContex';

function GenerateTarget({ level }) {
  const levelIndex = getLevelIndex(level);
  const { setStylesTarget, setStylesUser, defaultStyles } =
    useContext(StylesContex);

  function updateTarget() {
    const newTarget = generateTarget(levels[levelIndex]);
    setStylesTarget({ ...defaultStyles, ...newTarget });
    setStylesUser({ ...defaultStyles });
  }

  useEffect(() => {
    updateTarget();
  }, [level]);

  function handleClick() {
    updateTarget();
  }
  return <button onClick={handleClick}>Generate Target!</button>;
}

export default GenerateTarget;
