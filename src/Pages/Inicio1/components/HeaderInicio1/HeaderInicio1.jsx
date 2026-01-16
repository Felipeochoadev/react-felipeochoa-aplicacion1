import React from 'react';
import NotificacionesInicio1 from '../NotificacionesInicio1/NotificacionesInicio1';
import './HeaderInicio1.css';

const HeaderInicio1 = ({ usuario, onNotifClick, isNotifOpen, onMarkAsRead, onSeeMore }) => {
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
                <button className="HeaderInicio1_btn_notif seleccion" onClick={onNotifClick}>
                    <span className="material-symbols-outlined">notifications</span>
                    {usuario.notificaciones > 0 && (
                        <span className="HeaderInicio1_notif_badge">
                            {usuario.notificaciones > 9 ? '9+' : usuario.notificaciones}
                        </span>
                    )}
                </button>

                <NotificacionesInicio1
                    isOpen={isNotifOpen}
                    onClose={onNotifClick}
                    notificaciones={usuario.lista}
                    onMarkAsRead={onMarkAsRead}
                    onSeeMore={onSeeMore}
                />
            </div>
        </header>
    );
};

export default HeaderInicio1;
