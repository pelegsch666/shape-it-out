import ToolButton from "./ToolButton";







function ToolsPanel({setStyles,styles}){
 
    return(
     <>
     <ToolButton name="Width" setStyles={setStyles} styles={styles}/>
     <ToolButton name="Height"/>
     <ToolButton name="Radius"/>
     </>
 )




}

export default ToolsPanel;