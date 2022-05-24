import './App.css';

import DayRating from './DayRating';
import Home from "./Home"
import { Route, Routes } from "react-router-dom" 
import './style.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dayrating/:day" element={<DayRating />} />
    </Routes>
    
    </>
  );
}

export default App;
