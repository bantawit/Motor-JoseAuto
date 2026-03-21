import React from 'react';

const CarLogo = ({ className = '', style = {} }) => {
    return (
        <svg
            xmlns="http://www.svg.org/2000/svg"
            viewBox="0 0 400 120"
            className={className}
            style={{ width: '100%', height: 'auto', ...style }}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Front Nose (Neon Green / Primary) */}
            <path
                d="M 10 70 C 20 68, 30 65, 40 65"
                stroke="var(--primary, #ccff00)"
                strokeWidth="3"
            />

            {/* Main Body Outline (White) - Hood, Windshield, Roof, Rear & Taillight Hook */}
            <path
                d="M 40 65 C 60 65, 80 50, 110 40 C 130 33, 160 30, 200 35 C 240 40, 270 50, 290 55 C 295 56, 305 58, 305 65"
                stroke="var(--text-light, #ffffff)"
                strokeWidth="3"
            />

            {/* Side Door Crease / Outline (White) */}
            <path
                d="M 115 65 C 160 60, 220 55, 260 58"
                stroke="var(--text-light, #ffffff)"
                strokeWidth="2"
            />

            {/* Taillight Accent (Red) */}
            <path
                d="M 305 60 L 315 60 L 315 68 L 305 68"
                stroke="#ff3333"
                strokeWidth="3"
                fill="none"
            />

            {/* Front Wheel Arch and Side Skirt (Neon Green / Primary) */}
            <path
                d="M 45 90 C 45 105, 55 105, 55 90 L 60 85 L 180 90"
                stroke="var(--primary, #ccff00)"
                strokeWidth="3"
            />

            {/* Rear Wheel Arch (Neon Green / Primary) */}
            <path
                d="M 285 85 C 290 100, 310 100, 315 85"
                stroke="var(--primary, #ccff00)"
                strokeWidth="3"
            />
        </svg>
    );
};

export default CarLogo;
