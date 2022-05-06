import ToolButton from '../ToolButton/ToolButton';
import FlexRow from '../styles/layout/FlexRow';
import { v4 } from 'uuid';
import fullDict from '../../data/dicts';

function ToolsPanel({ setStylesUser, stylesUser, level }) {
  // TODO: render automatically according to user default styles.

  return (
    <>
      <FlexRow position="center">
        {level.map((value) => {
          return (
            <ToolButton
              key={v4()}
              name={value}
              setStylesUser={setStylesUser}
              stylesUser={stylesUser}
              amount={fullDict[value].resolution}
            />
          );
        })}
      </FlexRow>
    </>
  );
}

export default ToolsPanel;
