import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DatosSimulados } from '../../Core/Datos';
import { Hexagon, ChevronRight, GraduationCap, FileText, Bell, BarChart2, Info } from 'lucide-react';
import './ProfilePage.css';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        setUsuario(DatosSimulados.usuario);
    }, []);

    if (!usuario) return null;

    const menuItems = [
        { id: 1, label: 'My courses', icon: GraduationCap },
        { id: 2, label: 'Assignments', icon: FileText },
        { id: 3, label: 'Notifications', icon: Bell },
        { id: 4, label: 'My progress', icon: BarChart2 },
        { id: 5, label: 'Info', icon: Info }
    ];

    return (
        <div className="ProfilePage_Container seleccion" id="ProfilePage_Container">
            <div className="ProfilePage_Header">
                <div className="ProfilePage_Avatar">
                    <img src={usuario.avatar} alt="Avatar" />
                </div>
                <h2 className="ProfilePage_Name">{usuario.nombre}</h2>
                <button className="ProfilePage_Settings">
                    <Hexagon size="1.2em" fill="white" fillOpacity="0.2" />
                </button>
            </div>

            <div className="ProfilePage_Menu">
                {menuItems.map((item) => (
                    <div key={item.id} className="ProfilePage_MenuItem">
                        <div className="ProfilePage_MenuLeft">
                            <div className="ProfilePage_MenuIcon">
                                <item.icon size="1.2em" />
                            </div>
                            <span>{item.label}</span>
                        </div>
                        <ChevronRight size="1.2em" color="#ccc" />
                    </div>
                ))}
            </div>

            <div className="ProfilePage_Stats" onClick={() => navigate('/progress-detail')} style={{ cursor: 'pointer' }}>
                <div className="ProfilePage_StatHeader">
                    <h3>My progress</h3>
                </div>
                <div className="ProfilePage_ProgressBar">
                    <div
                        className="ProfilePage_ProgressFill"
                        style={{ width: `${usuario.progreso}%` }}
                    ></div>
                </div>
                <div className="ProfilePage_StatFooter">
                    <span>{usuario.progreso}% Completed</span>
                </div>
            </div>

        </div>
    );
};

export default ProfilePage;
