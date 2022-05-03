import ToolButton from "./ToolButton";
import FlexRow from "../styles/layout/FlexRow";






function ToolsPanel({setStyles,styles}){
 
    return(
     <>
     <FlexRow position='center'>
     <ToolButton name="Width" setStyles={setStyles} styles={styles} amount={10}/>
     <ToolButton name="Height" setStyles={setStyles} styles={styles} amount={10}/>
     <ToolButton name="Radius" setStyles={setStyles} styles={styles} amount={5}/>
     </FlexRow>
     </>
 )




}

export default ToolsPanel;