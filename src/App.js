import logo from './logo.svg';
import './App.css';
import VirtualScreen from './VirtualScreen';
import InPerson from './InPerson';
import Navbar from './common_components/Navbar';
import HomeScreen from './HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<>
            <Navbar buttonShow = {false} inPerson = {false}/>
            <HomeScreen />
          </>} />
          <Route path="/virtualScreen" element={
          <>
          <Navbar buttonShow = {true} inPerson = {false}/>
          <VirtualScreen />
          </>
        } />
          <Route path="/inPerson" element={<>
            <Navbar buttonShow = {true} inPerson = {true}/>
            <InPerson />
          </>} />
          <Route path="/" element={<HomeScreen />}>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
