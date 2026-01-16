import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DemoPage = ({ title }) => {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: '100vh',
            padding: '2rem',
            background: '#f8f9fa',
            fontFamily: 'sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <button
                onClick={() => navigate('/')}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    border: 'none',
                    background: 'white',
                    padding: '10px 15px',
                    borderRadius: '10px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <ArrowLeft size="1.2em" /> Volver al Índice
            </button>

            <div style={{
                textAlign: 'center',
                padding: '3rem',
                background: 'white',
                borderRadius: '30px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                maxWidth: '500px'
            }}>
                <h1 style={{ color: '#2d3436', marginBottom: '1rem' }}>{title}</h1>
                <p style={{ color: '#636e72', lineHeight: '1.6' }}>
                    Esta es una página de demostración (Placeholder).
                    Aquí podrás diseñar la versión <strong>{title}</strong>.
                </p>
                <div style={{
                    marginTop: '2rem',
                    padding: '2rem',
                    background: '#e3f2fd',
                    borderRadius: '20px',
                    color: '#0d47a1',
                    fontSize: '0.9rem'
                }}>
                    Página lista para recibir tu diseño.
                </div>
            </div>
        </div>
    );
};

export default DemoPage;
