import styled from 'styled-components'

const FlexCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: ${props => props.position};
`

export default FlexCol;