import React from 'react';

const EducationalLogo = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.05))' }}
        >
            {/* Sombrero de graduación (Birrete) */}
            <path
                d="M150 100L40 160L150 220L260 160L150 100Z"
                fill="#2D2E3A"
            />
            <path
                d="M60 170V230"
                stroke="#2D2E3A"
                strokeWidth="4"
                strokeLinecap="round"
            />
            <circle cx="60" cy="235" r="8" fill="#2D2E3A" />
            
            {/* Parte inferior del birrete */}
            <path
                d="M85 185V210C85 245.9 114.1 275 150 275C185.9 275 215 245.9 215 210V185"
                fill="#2D2E3A"
            />

            {/* Círculo con gradiente (el "rostro" del logo) */}
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4158D0" />
                    <stop offset="100%" stopColor="#C850C0" />
                </linearGradient>
            </defs>
            <circle cx="150" cy="225" r="65" fill="url(#logoGradient)" />
            
            {/* Icono de teléfono/auricular dentro del círculo */}
            <path
                d="M175 205C175 205 168 235 140 235"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.2"
            />
            <path
                d="M178 200L185 210"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.2"
            />
            <path
                d="M135 230L145 238"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.2"
            />

            {/* Línea ondulada inferior */}
            <path
                d="M150 290C150 290 120 310 150 330C180 350 150 370 150 370"
                stroke="#2D2E3A"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
};

export default EducationalLogo;
