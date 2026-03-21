import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './App.css';
import CarLogo from './components/CarLogo';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      <header className="header glass">
        <div className="container header-content">
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <CarLogo style={{ width: '120px', marginRight: '15px' }} />
            <h1>MOTOR<span className="text-primary">JOSEAUTO</span></h1>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
              <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Opiniones</a></li>
              <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Galería</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
