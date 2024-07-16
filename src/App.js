import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyPage from './pages/PropertyPage';
import 'remixicon/fonts/remixicon.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>Featured Listed Property</h1>
          <h2 className='text'>Real estate can be bought, sold, leased, or rented, and can be a <br></br>valuable investment opportunity. The value of real estate can be....</h2>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
