import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import MessageForm from './components/MessageForm'
import MessageDisplay from './components/MessageDisplay';

function App() {

  const [currentMessage, setCurrentMessage] = useState("There are no messages")

  const newMail = (newMessage)=>{
    setCurrentMessage(newMessage)
  } 

  return (
    <div className="App">
      <MessageForm onNewMessage={newMail}/>
      <MessageDisplay message={currentMessage}/>
    </div>
  );
}

export default App;
