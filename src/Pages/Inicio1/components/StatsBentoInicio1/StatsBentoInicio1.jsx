import React from 'react';
import './StatsBentoInicio1.css';

const StatsBentoInicio1 = ({ estadisticas }) => {
    return (
        <div id="StatsBentoInicio1" className="StatsBentoInicio1_grid">
            {estadisticas.map((stat) => (
                <div key={stat.id} className="StatsBentoInicio1_card">
                    <p className="StatsBentoInicio1_titulo">{stat.titulo}</p>
                    <div className="StatsBentoInicio1_valores">
                        <span className="StatsBentoInicio1_valor">{stat.valor}</span>
                        <span className={`StatsBentoInicio1_tendencia ${stat.esPositiva ? 'positivo' : 'negativo'}`}>
                            {stat.tendencia}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsBentoInicio1;
