import React, {Component} from 'react';

class Persons extends Component{
    constructor(){
        super();
        this.state={
            persons:[
                { name: 'Pavle Pavković', age:6, addons: 'No additional informations' },
                { name: 'Nataša Pavković', age:45, addons: 'My hobbie is knitting' },
                { name: 'Vladimir Pavković', age:42, addons: 'Sleeping' }
            ]
        };        
    }

    render(){
        const items = [];
        
        this.state.persons.map(
            (person)=>{
                items.push(
                    <div>
                        <h1>My name is {person.name}.</h1>
                        <h2>I'm {person.age} years old</h2>
                        <p>{person.addons}</p>
                    </div>
                )                                           
            }
        )

        return items;
    }
}

export default Persons;