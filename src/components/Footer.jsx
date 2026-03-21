import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>MOTOR <span>JOSEAUTO</span></h3>
                    <p>Tu taller de confianza en Seseña.</p>
                </div>
                <div className="footer-links">
                    <p>© {new Date().getFullYear()} Motor Joseauto. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
