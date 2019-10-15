import React from 'react';
import ThemedButton from './themedButton';

export default class ToolBar extends React.Component{
    render(){
        return(
            <div>
                <p>ToolBar component</p>
                <ThemedButton />                
            </div>
        )
    }
}