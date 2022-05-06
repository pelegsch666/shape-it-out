import styled from 'styled-components';
import FlexRow from '../styles/layout/FlexRow';

const Button = styled.button`
  width: 60px;
  height: 50px;
`;
const Header = styled.h1`
  color: purple;
`;
const ButtonContainer = styled.div`
  display: inline-block;
  border: black solid;
  padding: 6px;
`;

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
