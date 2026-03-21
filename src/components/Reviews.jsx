import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './Reviews.css';

const reviews = [
    {
        name: "Juan Perez",
        rating: 5,
        text: "Excelente servicio. Llevé mi coche para un problema de chapa y pintura y quedó como nuevo.",
        date: "Hace 1 mes"
    },
    {
        name: "Maria Garcia",
        rating: 5,
        text: "Trato inmejorable. Me explicaron todo el proceso de reparación de la mecánica. Sin duda volveré.",
        date: "Hace 2 meses"
    },
    {
        name: "Carlos Rodriguez",
        rating: 5,
        text: "Gran taller multimarca. Solucionaron un problema eléctrico que en otros talleres no daban con él.",
        date: "Hace 3 semanas"
    }
];

const Reviews = () => {
    return (
        <section className="section reviews-section" id="reviews">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        OPINIONES DE <span className="text-primary">CLIENTES</span>
                    </motion.h2>
                    <div className="header-line"></div>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <motion.div
                            className="review-card glass"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="quote-mark"><Quote size={60} /></div>
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" className="star-icon" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-footer">
                                <div className="review-avatar">
                                    {/* Abstract avatar based on name initials */}
                                    {review.name.charAt(0)}
                                </div>
                                <div className="review-meta">
                                    <h4>{review.name}</h4>
                                    <span className="review-source">Google Reviews</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="reviews-cta">
                    <a href="https://www.google.com/maps/place/Motor+Joseauto/@40.1087788,-3.6765142,52m/data=!3m1!1e3!4m6!3m5!1s0xd421c961690a8e7:0xbcb682f762984a30!8m2!3d40.1088622!4d-3.676539!16s%2Fg%2F11b6_prwbz?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn-outline-neon">
                        <MapPin size={18} style={{ marginRight: '8px' }} />
                        LEER MÁS EN GOOGLE MAPS
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
