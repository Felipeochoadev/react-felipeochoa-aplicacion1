import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Calculator, Atom, Sprout, Book } from 'lucide-react';
import { DatosSimulados } from '../../Core/Core/Datos';
import './DashboardPage.css';

const DashboardPage = () => {
    const navigate = useNavigate();
    const [cursos, setCursos] = useState([]);

    const iconMap = {
        Calculator: Calculator,
        Atom: Atom,
        Sprout: Sprout,
        Book: Book
    };

    useEffect(() => {
        setCursos(DatosSimulados.cursos);
    }, []);

    return (
        <div className="DashboardPage_Container seleccion" id="DashboardPage_Container">
            <div className="DashboardPage_Header">
                <div className="DashboardPage_SearchContainer" onClick={() => navigate('/search')}>
                    <Search size="1.2em" />
                    <input type="text" placeholder="Search" readOnly />
                </div>
                <button className="DashboardPage_IconBtn">
                    <Bell size="1.5em" />
                </button>
            </div>

            <div className="DashboardPage_Banner" onClick={() => navigate('/subject-detail')}>
                <div className="DashboardPage_BannerText">
                    <h2>Subject Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="DashboardPage_Section">
                <div className="DashboardPage_SectionHeader">
                    <h3>Categories</h3>
                    <button className="DashboardPage_Link" onClick={() => navigate('/search')}>See All</button>
                </div>
                <div className="DashboardPage_Grid">
                    {cursos.map((curso) => {
                        const IconComponent = iconMap[curso.icono] || Book;
                        return (
                            <div
                                key={curso.id}
                                className="DashboardPage_Card"
                                onClick={() => navigate('/courses')}
                            >
                                <div className="DashboardPage_CardIcon" style={{ backgroundColor: curso.color }}>
                                    <IconComponent size="2em" color="white" />
                                </div>
                                <span>{curso.titulo}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;
