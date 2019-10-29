import React from 'react';
import './CharComponent.css';

const CharComponent = (props)=>{
    return(        
        <p onClick={props.onCharClicked} style={props.style}>{props.letter}</p>
    );
}

export default CharComponent;