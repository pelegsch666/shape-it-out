
import styled from "styled-components";


const ShapeEl = styled.div`
width: ${props => props.styles.width}px;
height:  ${props => props.styles.height}px;
border: black solid;
background-color:  ${props => props.styles.color};
border-radius: ${props => props.styles.radius}%;
`




function Shape({styles}){

   

    return (
        <>
        <ShapeEl styles={styles} />
        </>
    )
}

export default Shape