import React from 'react';

import Person from '../Person/Person';

const Persons = (props)=>{     
        const items = [];
        
        props.persons.map(
            (person)=>{
                items.push(
                    <Person
                        key={person.id.toString()}
                        name={person.name}
                        age={person.age}>
                            {person.addons}
                    </Person>
                )                                           
            }
        )

        return items;    
}

export default Persons;