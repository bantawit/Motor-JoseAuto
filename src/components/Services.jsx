import React from 'react';
import { Hammer, PaintBucket, Wrench, Zap, Settings, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
    {
        icon: <Hammer size={32} />,
        title: 'CHAPA',
        description: 'Reparación milimétrica de carrocería. Recuperamos la línea original de tu vehículo.'
    },
    {
        icon: <PaintBucket size={32} />,
        title: 'PINTURA',
        description: 'Acabados de factoría. Igualación de color computarizada para un resultado invisible.'
    },
    {
        icon: <Wrench size={32} />,
        title: 'MECÁNICA',
        description: 'Diagnosis avanzada y reparación integral de motor, transmisión y sistemas de seguridad.'
    },
    {
        icon: <Zap size={32} />,
        title: 'ELECTRICIDAD',
        description: 'Solución experta a fallos electrónicos complejos en todas las marcas.'
    },
    {
        icon: <Settings size={32} />,
        title: 'NEUMÁTICOS',
        description: 'Montaje y equilibrado de alta precisión para el máximo agarre y seguridad.'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'PRE-ITV',
        description: 'Inspección exhaustiva garantizada. No dejes nada al azar.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const Services = () => {
    return (
        <section className="section services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        NUESTROS <span className="text-primary">SERVICIOS</span>
                    </motion.h2>
                    <motion.div
                        className="header-line"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    ></motion.div>
                </div>

                <motion.div
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card glass"
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="card-glow"></div>
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
