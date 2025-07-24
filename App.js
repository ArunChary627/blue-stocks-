import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UpcomingIPOs from './pages/UpcomingIPOs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UpcomingIPOs />} />
      </Routes>
    </Router>
  );
}

export default App;
