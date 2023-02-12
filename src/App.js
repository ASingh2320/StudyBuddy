import logo from './logo.svg';
import './App.css';
import Navbar from './common_components/Navbar';
import HomeScreen from './HomeScreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeScreen/>
    </div>
  );
}

export default App;
