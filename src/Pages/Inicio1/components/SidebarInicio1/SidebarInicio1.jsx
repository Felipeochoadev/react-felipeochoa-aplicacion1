import React from 'react';
import './SidebarInicio1.css';

const SidebarInicio1 = ({ usuario, navegacion }) => {
    return (
        <aside id="SidebarInicio1" className="SidebarInicio1_contenedor">
            <div className="SidebarInicio1_top">
                <div className="SidebarInicio1_user_area">
                    <div className="SidebarInicio1_avatar_marco">
                        <img src={usuario.avatar} alt="User" className="SidebarInicio1_avatar_img" />
                    </div>
                    <button className="SidebarInicio1_btn_notif seleccion">
                        <span className="material-symbols-outlined">notifications</span>
                        <span className="SidebarInicio1_notif_punto"></span>
                    </button>
                </div>
            </div>

            <nav className="SidebarInicio1_nav">
                {navegacion.filter(item => !item.esPrincipal).map((item) => (
                    <a key={item.id} href={item.href} className={`SidebarInicio1_nav_item ${item.id === 'casinos' ? 'activo' : ''}`}>
                        <span className="material-symbols-outlined">{item.icono}</span>
                        <span className="SidebarInicio1_nav_text">{item.label}</span>
                    </a>
                ))}
            </nav>
        </aside>
    );
};

export default SidebarInicio1;
