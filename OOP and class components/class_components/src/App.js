import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonInfo'
import MyNewComponent from './components/MyNewComponent'

function App() {
  return (
    <div className="App">
        <PersonCard
        lastName={"Robinson"}
        firstName={"Joel"}
        age={53}
        hair={"dark brown"}
        />

        <PersonCard
        lastName={"Mehrdad"}
        firstName={"Yazdani"}
        age={33}
        hair={"dark black"}
        />

        <MyNewComponent header={ "Header Prop" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyNewComponent> 
    </div>

    
  );
}

export default App;
