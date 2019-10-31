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

    const rnd = Math.random();
    if(rnd > 0.5) throw new Error('The resistor 2303 is out of order...');

    return(     
        <button
            onClick={()=>toggleButtonClicked()}
            /* style={globalState.expanded ? myStyle : myStyleInvert}> */
            style={myStyle}>
            Toggle Me</button>
    )
}

export default StyledButton;