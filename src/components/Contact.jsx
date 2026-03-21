import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container contact-wrapper">
                <motion.div
                    className="contact-info glass"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>CONTACTA CON <span className="text-primary">NOSOTROS</span></h2>
                    <div className="header-line contact-line"></div>
                    <p className="contact-desc">Estamos a tu disposición para cualquier consulta o presupuesto.</p>

                    <div className="info-grid">
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>DIRECCIÓN</h3>
                                <p>C/ Trigo 23<br />45223 Seseña (Toledo)</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>TELÉFONOS</h3>
                                <p className="phone-link"><a href="tel:918607437">91 860 74 37</a></p>
                                <p className="phone-link"><a href="tel:660235716">660 235 716</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>EMAIL</h3>
                                <p><a href="mailto:info@motorjoseauto.es">info@motorjoseauto.es</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock className="info-icon" />
                            <div>
                                <h3>HORARIO</h3>
                                <p>Lunes - Viernes: 08:30 - 19:00</p>
                                <p>Sábados: Cerrado</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.instagram.com/motorjoseauto/" target="_blank" rel="noopener noreferrer" className="social-btn-glitch">
                            <Instagram size={24} />
                            <span>SÍGUENOS EN INSTAGRAM</span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="map-container"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.634135478419!2d-3.6765390000000003!3d40.1088622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd421c961690a8e7%3A0xbcb682f762984a30!2sMotor%20Joseauto!5e0!3m2!1ses!2ses!4v1707600000000!5m2!1ses!2ses"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Motor Joseauto"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
