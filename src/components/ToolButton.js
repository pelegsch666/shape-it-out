import styled from "styled-components";
import Board from "./Board";
import FlexRowCenter from "../styles/layout/FlexRowCenter";
import Shape from "./Shape";

const AMOUNT = 10
const Button = styled.button`
width: 60px;
height: 50px;
`
const Header = styled.h1`
color: purple;
`
const ButtonContainer = styled.div`
display: inline-block;
border : black solid;
padding: 6px;
`



function ToolButton({name,styles,setStyles}){
console.log(styles)
function handleClick(name,e){
  const key = name.toLowerCase()
   if(e.target.innerHTML === '+'){
    setStyles({...styles,[key]: +styles[key] + AMOUNT})
   } else if(e.target.innerHTML === '-'){
    setStyles({...styles,[key]: +styles[key] - AMOUNT})
   }
  
   
}




  return (
      <>
      <ButtonContainer>
      <Header>{name}</Header>
      <FlexRowCenter>
      <Button onClick={(e) => handleClick(name,e)}>+</Button>
      <Button onClick={(e) => handleClick(name,e)}>-</Button>
      </FlexRowCenter>
      </ButtonContainer>

      </>
  )


}
export default ToolButton