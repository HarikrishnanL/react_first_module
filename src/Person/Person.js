import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>I am a person {props.name} {props.age} </p>

            <p>{props.children}</p>
            <input type="text" onChange={props.changedName} value={props.name}/>
        </div>
    );


}


export default Person; 