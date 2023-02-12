import logo from './logo.svg';
import './App.css';
import VirtualScreen from './VirtualScreen';
import InPerson from './InPerson';
import Navbar from './common_components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <VirtualScreen/>
    </div>
  );
}

export default App;
