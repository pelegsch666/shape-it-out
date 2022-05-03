import styled from "styled-components";

const FlexRow = styled.div`
display: flex;
justify-content: ${props => props.position};
height: ${props => props.height};
align-items: center;
`
export default FlexRow 