import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import LegalPage from './pages/LegalPage';

function App() {
  const { currentLanguage } = useLanguage();
  
  return (
    <Router>
      <div className={`app-wrapper ${currentLanguage}`}>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<LegalPage type="privacy" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="/cookies" element={<LegalPage type="cookies" />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
      <style jsx>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-content {
          flex: 1;
        }
      `}</style>
    </Router>
  );
}

export default App;
