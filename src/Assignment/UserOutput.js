import React from 'react';
import './UserOutput.css';

const UserOutput = (props)=>{
    const inlineStyle = {
        padding: '3px',
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid red'
    };

    return(
        <div>
            <h1>Username - {props.username}</h1>
            {
                props.showParagraph1 && 
                    <p style={inlineStyle}>
                        Paragraph 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tortor nulla, mattis in molestie non, lacinia quis arcu. Ut gravida tortor dui, facilisis tempus justo scelerisque mattis. Praesent nec tincidunt nunc, at finibus eros. Praesent eros sem, sagittis non lorem sodales, ultrices aliquet massa. Vivamus blandit magna sed tellus mattis, sit amet convallis ligula convallis. Cras faucibus nibh est, ut dignissim magna rhoncus non. Etiam mollis blandit felis, eu molestie libero rutrum et. Proin pharetra, arcu eget sodales imperdiet, orci dui condimentum lorem, in tincidunt metus augue venenatis urna.
                    </p>
            }
            {        
                !props.showParagraph1 &&
                    <p>
                        Paragraph 1 is not shown
                    </p>
            }           
            <p id="style1">
                Paragraph 2 - Morbi vel nisl eros. Maecenas rhoncus non velit suscipit faucibus. Sed interdum ipsum nec neque vulputate bibendum. Integer laoreet dui odio. Pellentesque maximus, velit at vulputate interdum, tellus nunc dignissim nisl, ac finibus justo est non magna. Suspendisse sed auctor nulla. Aenean porta lobortis diam, id varius metus congue sit amet. Vivamus nec metus risus. Sed at tellus quis nisl faucibus efficitur. Aenean eleifend euismod mi non gravida. Cras in nulla tortor. Pellentesque ut consectetur orci, quis elementum purus. Aliquam lobortis lectus lectus, eget lobortis felis molestie at. Nulla euismod lectus in interdum fringilla.
            </p>
        </div>
    );
}

export default UserOutput;