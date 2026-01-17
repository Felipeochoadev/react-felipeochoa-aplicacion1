import React from 'react';
import './BottomNavInicio1.css';

const BottomNavInicio1 = ({ navegacion, onAbrirModal }) => {
    // Dividimos los items para poner el FAB en el centro
    const itemsNormales = navegacion.filter(item => !item.esPrincipal);
    const fabItem = navegacion.find(item => item.esPrincipal);

    const itemsIzquierda = itemsNormales.slice(0, 2);
    const itemsDerecha = itemsNormales.slice(2);

    return (
        <nav id="BottomNavInicio1" className="BottomNavInicio1_contenedor">
            <div className="BottomNavInicio1_items">
                {itemsIzquierda.map((item) => (
                    <a key={item.id} className={`BottomNavInicio1_item ${item.id === 'casinos' ? 'activo' : ''}`} href={item.href}>
                        {item.icono}
                        <span className="BottomNavInicio1_item_text">{item.label}</span>
                    </a>
                ))}

                {fabItem && (
                    <div className="BottomNavInicio1_fab_container">
                        <button className="BottomNavInicio1_fab seleccion" onClick={onAbrirModal}>
                            {fabItem.icono}
                        </button>
                    </div>
                )}

                {itemsDerecha.map((item) => (
                    <a key={item.id} className="BottomNavInicio1_item" href={item.href}>
                        {item.icono}
                        <span className="BottomNavInicio1_item_text">{item.label}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default BottomNavInicio1;
