import React, { Component } from 'react';

import './udemyComponent.css';

export default class UdemyComponent extends Component{
    render(){
       /*  return(
            <div className="udemyClass">
                <h1>Hi, my name is Pavle Pavković</h1>
            </div>
        ); */
        //return React.createElement('div', {className: "udemyClass"}, <h1>Hi, my name is Pavle Pavković</h1>);
        return React.createElement(
            'div',
            {className: "udemyClass"},
            React.createElement(
                'h1',
                {},
                'Hi, my name is Pavle Pavković'
            )
        );
    }
}
