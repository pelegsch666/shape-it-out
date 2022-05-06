import { useParams } from 'react-router-dom';

import Board from '../Board/Board';
import ToolsPanel from '../ToolsPanel/ToolsPanel';
import GenerateTarget from './GenerateTarget';

import { useEffect, useContext } from 'react';
import StylesContex from '../../data/StylesContex';

function LevelTemplate() {
  const { level } = useParams();
  const testContext = useContext(StylesContex);
  return (
    <>
      <h1>Welcome to {level}</h1>
      <GenerateTarget level={level} />
      <Board />
      <ToolsPanel level={level} />
    </>
  );
}

export default LevelTemplate;
