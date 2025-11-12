import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MenuLink from './pages/MenuLink';
import ScrollToTop from './usefulFeatures/ScrollToTop';
import SupportLink from './pages/SupportLink'
import LoginLink from './pages/LoginLink';

function App() {
  return (
    <Router>
      <div className="App">
         <ScrollToTop/>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuLink />} />
          <Route path="/support" element={<SupportLink/>} />
          <Route path="/login" element={<LoginLink/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;