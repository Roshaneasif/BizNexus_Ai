import './App.css'
import Home from "./components/home";
import EnvironmentalMap from './components/EnvironmentalMap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
       <Router>
          <Routes className='text-black'>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<EnvironmentalMap />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
