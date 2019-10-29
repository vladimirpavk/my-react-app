import React from 'react';

const ValidationComponent = (props)=>{
    return(
        <div>
            {
                (props.length < 5) ?
                    <p>Text to short...</p>
                : null                    
            }
            {
                (props.length > 15) ?
                    <p>Text to long...</p>
                : null
            }
        </div>
    );
}

export default ValidationComponent;