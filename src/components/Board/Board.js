// import styled components
import FlexRow from '../styles/layout/FlexRow';
import FlexCol from '../styles/layout/FlexCol';
import ShapeContainer from './ShapeContainer';
import Header from './Header';

// import react components
import Shape from '../Shape/Shape';

// import context
import { useContext } from 'react';
import StylesContex from '../../data/StylesContex';

function Board() {
  const { stylesUser, stylesTarget } = useContext(StylesContex);

  return (
    <>
      <FlexRow position="space-evenly" height="500px">
        <ShapeContainer>
          <FlexCol>
            <Header>User Shape</Header>
            <Shape styles={stylesUser} />
          </FlexCol>
        </ShapeContainer>
        <ShapeContainer>
          <FlexCol>
            <Header>Target Shape</Header>
            <Shape styles={stylesTarget} />
          </FlexCol>
        </ShapeContainer>
      </FlexRow>
    </>
  );
}
export default Board;
