import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div>
      <Person fName={"Mehrdad"} lName={"Yazdani"} age={30} />
      <Person fName={"Tom"} lName={"Jackson"} age={67} />

    </div>
  );
}

export default App;
