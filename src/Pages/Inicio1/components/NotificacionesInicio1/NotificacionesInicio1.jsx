import React, { useEffect, useRef } from 'react';
import './NotificacionesInicio1.css';
import { IconoClose } from '../Iconos/IconoClose';
import { IconoNotificationsOff } from '../Iconos/IconoNotificationsOff';

const NotificacionesInicio1 = ({ isOpen, onClose, notificaciones, onMarkAsRead, onSeeMore }) => {
    const containerRef = useRef(null);

    // Cierre al dar clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const notificacionesLimitadas = notificaciones.slice(0, 3);

    return (
        <div id="NotificacionesInicio1" className="NotificacionesInicio1_contenedor" ref={containerRef}>
            <div className="NotificacionesInicio1_header">
                <h3 className="NotificacionesInicio1_titulo">Notifications</h3>
                <button className="NotificacionesInicio1_btn_cerrar" onClick={onClose}>
                    <IconoClose />
                </button>
            </div>

            {notificaciones.length > 0 ? (
                <>
                    <div className="NotificacionesInicio1_lista">
                        {notificacionesLimitadas.map((notif) => (
                            <div key={notif.id} className={`NotificacionesInicio1_item ${notif.leido ? 'leido' : ''}`}>
                                <div className={`NotificacionesInicio1_icono_area ${notif.tipo}`}>
                                    {notif.icono}
                                </div>
                                <div className="NotificacionesInicio1_contenido">
                                    <div className="NotificacionesInicio1_meta">
                                        <span className="NotificacionesInicio1_tiempo">{notif.tiempo}</span>
                                        {!notif.leido && <span className={`NotificacionesInicio1_status_dot ${notif.tipo}`}></span>}
                                    </div>
                                    <p className="NotificacionesInicio1_desc">{notif.descripcion}</p>
                                    {!notif.leido && (
                                        <button
                                            className="NotificacionesInicio1_btn_leer"
                                            onClick={() => onMarkAsRead(notif.id)}
                                        >
                                            Mark as Read
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="NotificacionesInicio1_footer">
                        <button className="NotificacionesInicio1_btn_ver_mas seleccion" onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onSeeMore();
                        }}>
                            Ver más
                        </button>
                    </div>
                </>
            ) : (
                <div className="NotificacionesInicio1_vacio">
                    <IconoNotificationsOff />
                    <p>No new notifications</p>
                </div>
            )}
        </div>
    );
};

export default NotificacionesInicio1;
