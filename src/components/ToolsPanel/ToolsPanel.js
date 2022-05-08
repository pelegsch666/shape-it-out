import ToolButton from '../ToolButton/ToolButton';
import FlexRow from '../styles/layout/FlexRow';
import { v4 } from 'uuid';
import levels from '../../data/levels';
import { getLevelIndex } from '../../data/helpers';

function ToolsPanel({ level }) {
  // level is a string in the fornat "level-n"
  const levelIndex = getLevelIndex(level);

  return (
    <>
      <FlexRow position="center">
        {levels[levelIndex].properties.map((value) => {
          return <ToolButton key={v4()} name={value} />;
        })}
      </FlexRow>
    </>
  );
}

export default ToolsPanel;
