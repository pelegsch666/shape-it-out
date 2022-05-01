import { useState,useEffect } from "react";
import styled from "styled-components";


const ShapeEl = styled.div`
width: ${props => props.styles.width}px;
height:  ${props => props.styles.height}px;
border: black solid;
background-color:  ${props => props.styles.color};
`




function Shape({styles}){

   

    return (
        <>
        <ShapeEl styles={styles} />
        </>
    )
}

export default Shape