import ToolButton from '../ToolButton/ToolButton';
import FlexRow from '../styles/layout/FlexRow';
import { v4 } from 'uuid';
import levels from '../../data/levels';

function ToolsPanel({ level }) {
  const levelIndex = Number(level.split('-')[1]) - 1;

  return (
    <>
      <FlexRow position="center">
        {levels[levelIndex].map((value) => {
          return <ToolButton key={v4()} name={value} />;
        })}
      </FlexRow>
    </>
  );
}

export default ToolsPanel;
