import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import './CasinoGridInicio1.css';

const CasinoGridInicio1 = ({ casinos }) => {
    return (
        <div id="CasinoGridInicio1" className="CasinoGridInicio1_contenedor">
            <div className="CasinoGridInicio1_header">
                <h2 className="CasinoGridInicio1_titulo_seccion">Live Performance</h2>
                <button className="CasinoGridInicio1_btn_ver_todo">View All</button>
            </div>
            <div className="CasinoGridInicio1_lista">
                {casinos.map((casino) => (
                    <div key={casino.id} className={`CasinoGridInicio1_card ${casino.estado === 'Inactive' ? 'inactivo' : ''}`}>
                        <div className="CasinoGridInicio1_card_header">
                            <div>
                                <h3 className="CasinoGridInicio1_nombre">{casino.nombre}</h3>
                                <p className="CasinoGridInicio1_ubicacion">{casino.ubicacion}</p>
                            </div>
                            <div className={`CasinoGridInicio1_badge ${casino.estado === 'Active' ? 'activo' : 'error'}`}>
                                {casino.estado === 'Active' && <span className="CasinoGridInicio1_dot_pulse"></span>}
                                <span className="CasinoGridInicio1_badge_text">{casino.estado}</span>
                            </div>
                        </div>

                        <div className="CasinoGridInicio1_grafico">
                            <ResponsiveContainer width="100%" height="100%" debounce={1}>
                                <AreaChart data={casino.grafico} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id={`colorVal-${casino.id}`} x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={casino.color} stopOpacity={0.6} />
                                            <stop offset="95%" stopColor={casino.color} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis hide />
                                    <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '12px', color: '#fff' }}
                                        itemStyle={{ color: casino.color }}
                                        labelStyle={{ display: 'none' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="val"
                                        stroke={casino.color}
                                        strokeWidth={4}
                                        fillOpacity={1}
                                        fill={`url(#colorVal-${casino.id})`}
                                        strokeDasharray={casino.estado === 'Inactive' ? "8 8" : ""}
                                        dot={false}
                                        activeDot={{ r: 6, fill: casino.color, stroke: '#0a0a0a', strokeWidth: 2 }}
                                        isAnimationActive={true}
                                        animationDuration={1500}
                                        className={casino.estado === 'Active' ? 'sparkline-anim' : ''}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="CasinoGridInicio1_info_footer">
                            <div className="CasinoGridInicio1_stats_row">
                                <div className="CasinoGridInicio1_stat_item">
                                    <span className="CasinoGridInicio1_stat_label">Revenue</span>
                                    <span className="CasinoGridInicio1_stat_valor">{casino.ingresos}</span>
                                </div>
                                <div className="CasinoGridInicio1_stat_item">
                                    <span className="CasinoGridInicio1_stat_label">Players</span>
                                    <span className="CasinoGridInicio1_stat_valor">{casino.jugadores}</span>
                                </div>
                            </div>
                            <div className="CasinoGridInicio1_adjuntos">
                                <button className="CasinoGridInicio1_btn_accion seleccion">
                                    <span className="material-symbols-outlined">edit_square</span>
                                </button>
                                <button className="CasinoGridInicio1_btn_accion primario seleccion">
                                    <span className="material-symbols-outlined">open_in_full</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CasinoGridInicio1;
