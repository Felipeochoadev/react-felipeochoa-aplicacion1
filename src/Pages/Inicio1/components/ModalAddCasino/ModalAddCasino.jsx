import React, { useState, useEffect } from 'react';
import { IconoClose } from '../Iconos/IconoClose';
import './ModalAddCasino.css';

const ModalAddCasino = ({ isOpen, onClose, onSave, addNotification }) => {
    const [loading, setLoading] = useState(false);
    const [errores, setErrores] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        ubicacion: '',
        estado: 'Active',
        ingresos: '',
        jugadores: ''
    });

    // Reset de datos al cerrar o abrir
    useEffect(() => {
        if (!isOpen) {
            setFormData({
                nombre: '',
                ubicacion: '',
                estado: 'Active',
                ingresos: '',
                jugadores: ''
            });
            setErrores([]);
            setLoading(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Limpiar error al escribir
        if (value.trim() !== "") {
            setErrores(prev => prev.filter(err => err !== name));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const campos = [
            { id: 'nombre', label: 'Nombre del Casino' },
            { id: 'ubicacion', label: 'Ubicación' },
            { id: 'ingresos', label: 'Ingresos' },
            { id: 'jugadores', label: 'Jugadores' }
        ];

        const nuevosErrores = campos
            .filter(campo => !formData[campo.id] || formData[campo.id].trim() === "")
            .map(campo => campo.id);

        if (nuevosErrores.length > 0) {
            setErrores(nuevosErrores);
            const primerCampoFaltante = campos.find(c => nuevosErrores.includes(c.id));
            addNotification('warning', `El campo "${primerCampoFaltante.label}" es obligatorio.`);
            return;
        }

        setLoading(true);

        // Simulación de carga de red
        setTimeout(() => {
            onSave(formData);
            setLoading(false);
            onClose();
        }, 2000);
    };

    return (
        <div className="ModalAddCasino_overlay" onClick={onClose}>
            <div className="ModalAddCasino_contenedor" onClick={e => e.stopPropagation()}>
                <div className="ModalAddCasino_header">
                    <h2 className="ModalAddCasino_titulo">Add New Casino</h2>
                    <button className="ModalAddCasino_btn_cerrar" onClick={onClose}>
                        <IconoClose />
                    </button>
                </div>

                <form className="ModalAddCasino_form" onSubmit={handleSubmit} autocomplete="off">
                    <div className="ModalAddCasino_campo">
                        <label className="ModalAddCasino_label">Casino Name</label>
                        <input
                            type="text"
                            name="nombre"
                            className={`ModalAddCasino_input ${errores.includes('nombre') ? 'error' : ''}`}
                            placeholder="Enter casino name"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="ModalAddCasino_campo">
                        <label className="ModalAddCasino_label">Location</label>
                        <input
                            type="text"
                            name="ubicacion"
                            className={`ModalAddCasino_input ${errores.includes('ubicacion') ? 'error' : ''}`}
                            placeholder="e.g. Las Vegas, NV"
                            value={formData.ubicacion}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="ModalAddCasino_campo">
                        <label className="ModalAddCasino_label">Status</label>
                        <select
                            name="estado"
                            className="ModalAddCasino_input"
                            value={formData.estado}
                            onChange={handleChange}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="ModalAddCasino_stats_row">
                        <div className="ModalAddCasino_campo">
                            <label className="ModalAddCasino_label">Revenue</label>
                            <input
                                type="text"
                                name="ingresos"
                                className={`ModalAddCasino_input ${errores.includes('ingresos') ? 'error' : ''}`}
                                placeholder="$0.00"
                                value={formData.ingresos}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="ModalAddCasino_campo">
                            <label className="ModalAddCasino_label">Players</label>
                            <input
                                type="text"
                                name="jugadores"
                                className={`ModalAddCasino_input ${errores.includes('jugadores') ? 'error' : ''}`}
                                placeholder="0"
                                value={formData.jugadores}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="ModalAddCasino_acciones">
                        <button type="button" className="ModalAddCasino_btn ModalAddCasino_btn_cancelar" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="ModalAddCasino_btn ModalAddCasino_btn_guardar">
                            Save
                        </button>
                    </div>
                </form>

                {loading && (
                    <div className="ModalAddCasino_loading_overlay">
                        <div className="ModalAddCasino_spinner_container">
                            <div className="ModalAddCasino_spinner">
                                <span className="ModalAddCasino_loading_text">Creando</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalAddCasino;
