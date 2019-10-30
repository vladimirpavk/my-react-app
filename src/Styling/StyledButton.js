import React, { useState } from 'react';

const StyledButton = ()=>{
    const [globalState, setGlobalState] = useState({
        expanded: false
    });    

    const myStyle = {
        backgroundColor : 'white',
        color : 'black'
    };

   /*  const myStyleInvert = {
        backgroundColor : 'black',
        color : 'white'
    }; */

    if(globalState.expanded){
        myStyle.color = 'green';
        myStyle.backgroundColor = 'black';
    }
    
    const toggleButtonClicked = () => {
        const newState = !globalState.expanded;
        setGlobalState({
            expanded:newState
        });
    }

    return(     
        <button
            onClick={()=>toggleButtonClicked()}
            /* style={globalState.expanded ? myStyle : myStyleInvert}> */
            style={myStyle}>
            Toggle Me</button>
    )
}

export default StyledButton;