import React from 'react';

export default class FancyBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div width="300px">
                <div class="headingClass">
                    {props.heading}
                </div>
                <div class="postClass">
                    {props.children}
                </div>
            </div>
        );
    }
}