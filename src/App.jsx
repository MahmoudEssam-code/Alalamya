import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import LegalPage from './pages/LegalPage';
import ScrollToTop from './components/ScrollToTop';

const AppContent = () => {
  const { currentLanguage } = useLanguage();
  const location = useLocation();

  return (
    <div className={`app-wrapper ${currentLanguage} bg-[#0a192f] text-[#ccd6f6] min-h-screen flex flex-col`}>
      <ScrollToTop />
      <Navbar />
      
      {/* 
        By using both location.pathname and currentLanguage in the key, 
        AnimatePresence will trigger a transition both when navigating pages 
        AND when switching languages.
      */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname + currentLanguage}
          initial={{ opacity: 0, filter: 'blur(5px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(5px)', scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="main-content flex-grow"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<LegalPage type="privacy" />} />
            <Route path="/terms" element={<LegalPage type="terms" />} />
            <Route path="/cookies" element={<LegalPage type="cookies" />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
