import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            {/* Animated Background Elements */}
            <div className="hero-bg-glow"></div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-text-container"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="hero-subtitle"
                    >
                        TALLER MULTIMARCA
                    </motion.h2>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hero-title"
                    >
                        MOTOR <span className="text-primary glitch-text" data-text="JOSEAUTO">JOSEAUTO</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="hero-description"
                    >
                        PASIÓN POR EL DETALLE. EXCELENCIA EN CADA REPARACIÓN.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="hero-badges"
                    >
                        <div className="badge glass">
                            <CheckCircle size={20} className="text-primary" />
                            <span>TRABAJAMOS CON TODAS LAS ASEGURADORAS</span>
                        </div>
                        <div className="badge glass">
                            <Shield size={20} className="text-primary" />
                            <span>MANTENIMIENTO OFICIAL SIN PERDER GARANTÍA</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="hero-actions"
                    >
                        <a href="#contact" className="btn-neon">
                            RESERVAR CITA
                            <span className="btn-glitch"></span>
                        </a>
                        <a href="#services" className="btn-glass">
                            NUESTROS SERVICIOS
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="scroll-indicator"
            >
                <span>DESCUBRE MÁS</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown size={24} color="var(--primary)" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
