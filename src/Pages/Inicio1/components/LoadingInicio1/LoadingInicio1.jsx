import React from 'react';
import './LoadingInicio1.css';

const LoadingInicio1 = ({ mensaje = "Cargando" }) => {
    return (
        <div className="LoadingInicio1_overlay">
            <div className="LoadingInicio1_spinner_container">
                <div className="LoadingInicio1_spinner">
                    <span className="LoadingInicio1_loading_text">{mensaje}</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingInicio1;
