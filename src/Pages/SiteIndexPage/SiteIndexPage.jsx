import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Layout, BookOpen, User, Settings, Sparkles } from 'lucide-react';
import './SiteIndexPage.css';

const SiteIndexPage = () => {
    const [expandedGroups, setExpandedGroups] = useState({
        'Inicios': true, // Por defecto abierto para mostrar las versiones de inicio
    });

    const toggleGroup = (groupName) => {
        setExpandedGroups(prev => ({
            ...prev,
            [groupName]: !prev[groupName]
        }));
    };

    const groupedPages = [
        {
            category: 'Inicios',
            icon: <Sparkles size="1.2em" />,
            pages: [
                { name: 'Splash Screen (Actual)', path: '/splash', description: 'Pantalla de bienvenida inicial' },
                { name: 'Inicio V1 (Demo)', path: '/inicio1', description: 'Versión alternativa de inicio 1' },
                { name: 'Inicio V2 (Demo)', path: '/inicio2', description: 'Versión alternativa de inicio 2' },
                { name: 'Inicio V3 (Demo)', path: '/inicio3', description: 'Versión alternativa de inicio 3' },
            ]
        },
        {
            category: 'Acceso y Perfil',
            icon: <User size="1.2em" />,
            pages: [
                { name: 'Autenticación', path: '/auth', description: 'Login y Registro' },
                { name: 'Perfil', path: '/profile', description: 'Perfil de usuario y configuración' },
            ]
        },
        {
            category: 'Exploración',
            icon: <Layout size="1.2em" />,
            pages: [
                { name: 'Dashboard', path: '/dashboard', description: 'Vista principal del usuario' },
                { name: 'Búsqueda', path: '/search', description: 'Búsqueda de cursos y contenido' },
                { name: 'Calendario', path: '/calendar', description: 'Calendario de actividades' },
            ]
        },
        {
            category: 'Aprendizaje',
            icon: <BookOpen size="1.2em" />,
            pages: [
                { name: 'Cursos', path: '/courses', description: 'Listado de cursos disponibles' },
                { name: 'Detalles de Asignatura', path: '/subject-detail', description: 'Información detallada de una asignatura' },
                { name: 'Lecciones', path: '/lessons', description: 'Lista de lecciones de un curso' },
                { name: 'Detalle de Lección', path: '/lesson-detail', description: 'Vista de contenido de una lección' },
                { name: 'Quiz', path: '/quiz', description: 'Evaluaciones y cuestionarios' },
            ]
        },
        {
            category: 'Seguimiento',
            icon: <Settings size="1.2em" />,
            pages: [
                { name: 'Reseñas', path: '/reviews', description: 'Reseñas y calificaciones' },
                { name: 'Detalle de Progreso', path: '/progress-detail', description: 'Seguimiento detallado del progreso' },
            ]
        }
    ];

    return (
        <div className="site-index-container">
            <header className="site-index-header">
                <h1>Índice de Desarrollo</h1>
                <p>Navega a través de todas las pantallas y versiones diseñadas</p>
            </header>

            <div className="site-index-content">
                {groupedPages.map((group) => (
                    <div key={group.category} className={`site-index-group ${expandedGroups[group.category] ? 'is-expanded' : ''}`}>
                        <button
                            className="group-header"
                            onClick={() => toggleGroup(group.category)}
                        >
                            <div className="group-title">
                                <span className="group-icon">{group.icon}</span>
                                <h2>{group.category}</h2>
                                <span className="group-count">{group.pages.length} pantallas</span>
                            </div>
                            {expandedGroups[group.category] ? <ChevronDown size="1.2em" /> : <ChevronRight size="1.2em" />}
                        </button>

                        <div className="group-items">
                            <div className="site-index-grid">
                                {group.pages.map((page) => (
                                    <Link to={page.path} key={page.path} className="site-index-card">
                                        <div className="card-content">
                                            <h3>{page.name}</h3>
                                            <code className="path-badge">{page.path}</code>
                                            <p>{page.description}</p>
                                        </div>
                                        <div className="card-arrow">→</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SiteIndexPage;
