import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import TabBar from '../../Shared/TabBar/TabBar';
import { DatosSimulados } from '../../Core/Core/Datos';
import './ProgressDetailPage.css';

const ProgressDetailPage = () => {
    const navigate = useNavigate();
    const stats = DatosSimulados.progresoDetalle;

    return (
        <div className="ProgressDetailPage_Container seleccion" id="ProgressDetailPage_Container">
            <div className="ProgressDetailPage_Header">
                <button className="ProgressDetailPage_Back" onClick={() => navigate(-1)}>
                    <ArrowLeft color="#333" size="1.5em" />
                </button>
                <MoreHorizontal color="#333" />
            </div>

            <div className="ProgressDetailPage_ChartCard">
                <div className="ProgressDetailPage_ChartHeader">
                    {['mon', 'tu', 'we', 'th', 'fr', 'sa'].map(d => <span key={d}>{d}</span>)}
                </div>
                {/* SVG simplificado para el gráfico de línea */}
                <div className="ProgressDetailPage_Chart">
                    <svg viewBox="0 0 100 50">
                        <path
                            d="M 0,40 Q 20,10 40,30 T 80,10 T 100,20"
                            fill="none"
                            stroke="url(#grad)"
                            strokeWidth="2"
                        />
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4158D0" />
                                <stop offset="100%" stopColor="#C850C0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="ProgressDetailPage_Stats">
                <div className="ProgressDetailPage_StatCard">
                    <h3>{stats.porcentaje}%</h3>
                </div>
                <div className="ProgressDetailPage_StatCard">
                    <h3>{stats.tests}</h3>
                    <span>TESTS</span>
                </div>
            </div>

            <div className="ProgressDetailPage_List">
                {stats.fechas.map(f => (
                    <div key={f.id} className="ProgressDetailPage_Item">
                        <div className="ProgressDetailPage_ItemInfo">
                            <span className="ProgressDetailPage_ItemDate">{f.fecha}</span>
                            <div className="ProgressDetailPage_ItemBar">
                                <div className="ProgressDetailPage_ItemBarFill" style={{ width: f.valor }}></div>
                            </div>
                        </div>
                        <span className="ProgressDetailPage_ItemValue">{f.valor}</span>
                    </div>
                ))}
            </div>

            <TabBar />
        </div>
    );
};

export default ProgressDetailPage;
