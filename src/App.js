import logo from './logo.svg';
import './App.css';
import InPerson from './InPerson';
import Navbar from './common_components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <InPerson/> 
    </div>
  );
}

export default App;
