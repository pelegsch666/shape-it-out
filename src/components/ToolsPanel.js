import ToolButton from './ToolButton';
import FlexRow from '../styles/layout/FlexRow';

function ToolsPanel({ setStylesUser, stylesUser }) {
  // TODO: render automatically according to user default styles.

  return (
    <>
      <FlexRow position="center">
        <ToolButton
          name="Width"
          setStylesUser={setStylesUser}
          stylesUser={stylesUser}
          amount={10}
        />
        <ToolButton
          name="Height"
          setStylesUser={setStylesUser}
          stylesUser={stylesUser}
          amount={10}
        />
        <ToolButton
          name="Border-radius"
          setStylesUser={setStylesUser}
          stylesUser={stylesUser}
          amount={5}
        />
      </FlexRow>
    </>
  );
}

export default ToolsPanel;
