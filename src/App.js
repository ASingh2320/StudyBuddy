import logo from './logo.svg';
import './App.css';
import Navbar from './common_components/Navbar';
import HomeScreen from './HomeScreen';
import InPerson from './InPerson';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <InPerson/> 
    </div>
  );
}

export default App;
