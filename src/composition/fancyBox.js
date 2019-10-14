import React from 'react';

import './fancyBox.css';

export default class FancyBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div width="300px">
                <div className="headingClass">
                    {this.props.heading}
                </div>
                <div className="postClass">
                    {this.props.post}
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}