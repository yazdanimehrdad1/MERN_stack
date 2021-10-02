import React, {useState} from 'react'
import {Router, Link} from '@reach/router'

const NumberRoute = (props)=>{
    return(
        <div>
            <p>This is Page {props.id} {props.word}</p>

            <div style={{backgroundColor:props.color1}}>
                <p style={{color: props.color2}}>The word is {props.word}</p>
            </div>
        </div>
    );
}

export default NumberRoute