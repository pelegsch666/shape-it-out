// imports styled components
import FlexRow from '../styles/layout/FlexRow';
import Button from './Button';
import ButtonContainer from './ButtonContainer';
import Header from './Header';

function ToolButton({ name, stylesUser, setStylesUser, amount }) {
  const key = name.toLowerCase();

  function handleClick(name, e) {
    if (e.target.innerHTML === '+') {
      setStylesUser({ ...stylesUser, [key]: +stylesUser[key] + amount });
    } else if (e.target.innerHTML === '-') {
      setStylesUser({ ...stylesUser, [key]: +stylesUser[key] - amount });
    }
  }

  return (
    <>
      <ButtonContainer>
        <Header>
          {name}: <span>{stylesUser[key]}</span>
        </Header>
        <FlexRow position="center">
          <Button onClick={(e) => handleClick(name, e)}>+</Button>
          <Button onClick={(e) => handleClick(name, e)}>-</Button>
        </FlexRow>
      </ButtonContainer>
    </>
  );
}
export default ToolButton;
