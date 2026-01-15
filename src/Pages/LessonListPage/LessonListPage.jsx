import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { DatosSimulados } from '../../Core/Datos';
import './LessonListPage.css';

const LessonListPage = () => {
    const navigate = useNavigate();
    const [lecciones, setLecciones] = useState([]);

    useEffect(() => {
        setLecciones(DatosSimulados.lecciones);
    }, []);

    return (
        <div className="LessonListPage_Container seleccion" id="LessonListPage_Container">
            <div className="LessonListPage_Header">
                <button className="LessonListPage_Back" onClick={() => navigate(-1)}>
                    <ArrowLeft color="white" size="1.5em" />
                </button>
                <div className="LessonListPage_Hero">
                    <div className="LessonListPage_Icon">
                        <Briefcase size="3em" color="white" />
                    </div>
                    <div className="LessonListPage_HeroText">
                        <h2>LOREM IPSUM</h2>
                        <span>24 COURSES</span>
                    </div>
                </div>
            </div>

            <div className="LessonListPage_List">
                {lecciones.map((item) => (
                    <div
                        key={item.id}
                        className={`LessonListPage_Item ${item.id === 3 ? 'active' : ''}`}
                        onClick={() => navigate('/lesson-detail')}
                    >
                        <div className="LessonListPage_ItemNumber">{item.numero}</div>
                        <div className="LessonListPage_ItemInfo">
                            <h4>{item.titulo}</h4>
                        </div>
                        <div className="LessonListPage_ItemHours">{item.horas}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LessonListPage;
