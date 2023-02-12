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
            <Navbar />
            <HomeScreen />
          </>} />
          <Route path="/virtualScreen" element={
          <>
          <Navbar/>
          <VirtualScreen />
          </>
        } />
          <Route path="/inPerson" element={<>
            <Navbar />
            <InPerson />
          </>} />
          <Route path="/" element={<HomeScreen />}>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
