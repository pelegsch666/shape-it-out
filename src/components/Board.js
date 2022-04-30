import styled from 'styled-components'
import {useState} from 'react'

const RADIUS_DIFF = 1 
const SIZE_DIFF = 10
const COLORS = ['DeepPink','Tomato','DarkBlue','MediumVioletRed','Lavender','LightCoral','Salmon']


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }



const Cell = styled.div`
height  : ${props => props.size}px;
width: ${props => props.size}px;
background-color: ${props => props.color};
 border-radius:${props => props.radius}%;
`

function Board(){
    const [size,setSize] = useState(500)
    const [radius,setRadius] = useState(50)
    const [operate,setOperate] = useState('-')
    const [color,setColor] = useState('salmon')
    function handleClick() {
        setSize(size + SIZE_DIFF)
    }
    function handleRightClick(e){
        setSize(size - SIZE_DIFF)
    e.preventDefault()
    }
    function handleOnWheel(e){
        setRadius(radius - RADIUS_DIFF)
       console.log(radius)
       if(radius === 0){
           setOperate('+')
       } 
        else if(radius === 50){
        setOperate('-')
       }
       
       operate === '-' ? setRadius(radius - RADIUS_DIFF): setRadius(radius + RADIUS_DIFF)
       setColor(COLORS[getRandomIntInclusive(0,COLORS.length - 1)])
    }

    return<>
    <Cell onClick={handleClick } 
    onContextMenu={(e) => handleRightClick(e)}   onWheel = {(e) => {handleOnWheel(e)}}  radius={radius}  size={size} color={color}>
    
    </Cell>
    </>
}
export default Board
