import React from 'react';
import { ThemeContext } from '../Context';

export default class ThemedButton extends React.Component{
    constructor(){
        super();
        console.log(ThemeContext);
    }
    render(){     
        //console.log('ThemedButton context', this);

        return(
            <div>
                <button>Click me</button>
            </div>
        )
    }        
}

ThemedButton.contextType = ThemeContext;