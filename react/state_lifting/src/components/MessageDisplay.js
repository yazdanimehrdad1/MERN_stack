import React, {useState} from 'react'

const MessageDisplay = (props)=>{

    return(
        <div>
            <h1>Current Message</h1>
            <pre>{props.message}</pre>
        </div>

    );
}

export default MessageDisplay;