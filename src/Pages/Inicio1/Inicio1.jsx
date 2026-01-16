import React, { useEffect, useState, lazy, Suspense } from 'react';
import HeaderInicio1 from './components/HeaderInicio1/HeaderInicio1';
import SearchBarInicio1 from './components/SearchBarInicio1/SearchBarInicio1';
import StatsBentoInicio1 from './components/StatsBentoInicio1/StatsBentoInicio1';
import CasinoGridInicio1 from './components/CasinoGridInicio1/CasinoGridInicio1';
import SidebarInicio1 from './components/SidebarInicio1/SidebarInicio1';
import BottomNavInicio1 from './components/BottomNavInicio1/BottomNavInicio1';
import ModalAddCasino from './components/ModalAddCasino/ModalAddCasino';
import NotificationInicio1 from './components/NotificationInicio1/NotificationInicio1';
import './Inicio1.css';
import { Inicio1Consumo } from './core/Consumo';

const Inicio1 = () => {
    const [datos, setDatos] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [notificaciones, setNotificaciones] = useState([]);
    useEffect(() => {
        const cargarDatos = async () => {
            const result = await Inicio1Consumo.obtenerDatosVista();
            setDatos(result);
        };
        cargarDatos();
    }, []);

    if (!datos) return <div className="Inicio1_loading">Loading Dashboard...</div>;

    const handleAbrirModal = () => setMostrarModal(true);
    const handleCerrarModal = () => setMostrarModal(false);

    const addNotification = (type, message) => {
        const id = Date.now();
        setNotificaciones(prev => [...prev, { id, type, message }]);
    };

    const removeNotification = (id) => {
        setNotificaciones(prev => prev.filter(n => n.id !== id));
    };

    const handleGuardarCasino = (nuevoCasino) => {
        console.log("Saving new casino:", nuevoCasino);
        // Simulamos éxito
        addNotification('success', 'Casino creado con éxito.');
    };

    return (
        <div id="Inicio1" className="Inicio1_page_contenedor">
            <SidebarInicio1
                usuario={datos.usuario}
                navegacion={datos.navegacion}
                onAbrirModal={handleAbrirModal}
            />
            <div className="Inicio1_main_wrapper">
                <HeaderInicio1 usuario={datos.usuario} />
                <main className="Inicio1_main_content">
                    <SearchBarInicio1 />
                    <StatsBentoInicio1 estadisticas={datos.estadisticas} />
                    <CasinoGridInicio1 casinos={datos.casinos} />
                </main>
            </div>
            <BottomNavInicio1
                navegacion={datos.navegacion}
                onAbrirModal={handleAbrirModal}
            />
            {datos.navegacion.filter(item => item.esPrincipal).map(fab => (
                <button
                    key={fab.id}
                    className="Inicio1_fab_desktop seleccion"
                    onClick={handleAbrirModal}
                >
                    <span className="material-symbols-outlined">{fab.icono}</span>
                </button>
            ))}

            <ModalAddCasino
                isOpen={mostrarModal}
                onClose={handleCerrarModal}
                onSave={handleGuardarCasino}
                addNotification={addNotification}
            />

            <div className="NotificationInicio1_container">
                {notificaciones.map(noti => (
                    <NotificationInicio1
                        key={noti.id}
                        type={noti.type}
                        message={noti.message}
                        onClose={() => removeNotification(noti.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Inicio1;