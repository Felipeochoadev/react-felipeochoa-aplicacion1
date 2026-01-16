import React from 'react';
import './HeaderInicio1.css';

const HeaderInicio1 = ({ usuario }) => {
    return (
        <header id="HeaderInicio1" className="HeaderInicio1_contenedor">
            <div className="HeaderInicio1_info">
                <div className="HeaderInicio1_avatar_marco">
                    <img
                        src={usuario.avatar}
                        alt="User Profile"
                        className="HeaderInicio1_avatar_img"
                    />
                </div>
                <div className="HeaderInicio1_textos">
                    <h1 className="HeaderInicio1_saludo">{usuario.saludo}</h1>
                    <p className="HeaderInicio1_nombre">{usuario.nombre}</p>
                </div>
            </div>
            <div className="HeaderInicio1_acciones">
                <button className="HeaderInicio1_btn_notif seleccion">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="HeaderInicio1_notif_punto"></span>
                </button>
            </div>
        </header>
    );
};

export default HeaderInicio1;
