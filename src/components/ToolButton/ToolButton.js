// imports styled components
import FlexRow from '../styles/layout/FlexRow';
import Button from './Button';
import ButtonContainer from './ButtonContainer';
import Header from './Header';

// imports context
import StylesContex from '../../data/StylesContex';
import { useContext } from 'react';

// more imports
import fullDict from '../../data/dicts';

function ToolButton({ name }) {
  const { stylesUser, setStylesUser } = useContext(StylesContex);
  function handleClick(name, e) {
    if (e.target.innerHTML === '+') {
      if (+stylesUser[name] <= fullDict[name].max - fullDict[name].resolution) {
        setStylesUser({
          ...stylesUser,
          [name]: +stylesUser[name] + fullDict[name].resolution,
        });
      }
    } else if (e.target.innerHTML === '-') {
      if (+stylesUser[name] >= fullDict[name].min + fullDict[name].resolution) {
        setStylesUser({
          ...stylesUser,
          [name]: +stylesUser[name] - fullDict[name].resolution,
        });
      }
    }
  }

  return (
    <>
      <ButtonContainer>
        <Header>
          {name}: <span>{stylesUser[name]}</span>
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
