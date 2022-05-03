import FlexRow from '../styles/layout/FlexRow';
import FlexCol from '../styles/layout/FlexCol';
import Shape from './Shape'


import styled from 'styled-components';

const ShapeContainer = styled.div`
border: solid red;
`


const Header = styled.h1`

`


function Board({stylesUser,stylesTarget}){
  
 

    return<>
    <FlexRow position='space-evenly' height='500px'>
      <ShapeContainer>
        <FlexCol>
          <Header>User Shape</Header>
            <Shape styles={stylesUser}/>
        </FlexCol>
      </ShapeContainer>
      <ShapeContainer>
        <FlexCol>
          <Header>Target Shape</Header>
          <Shape styles={stylesTarget}/>
        </FlexCol>
      </ShapeContainer>
    
    </FlexRow>
    </>
}
export default Board
