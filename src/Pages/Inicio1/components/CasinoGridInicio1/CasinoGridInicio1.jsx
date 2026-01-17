import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { IconoEditSquare } from '../Iconos/IconoEditSquare';
import { IconoOpenInFull } from '../Iconos/IconoOpenInFull';
import './CasinoGridInicio1.css';

const CasinoGridChart = ({ casino }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isNearViewport, setIsNearViewport] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsNearViewport(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' } // Cargar un poco antes de que sea visible
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!containerRef.current || !isNearViewport) return;

        const updateDimensions = () => {
            if (containerRef.current) {
                const { offsetWidth, offsetHeight } = containerRef.current;
                // Solo actualizamos si hay cambios significativos y valores válidos
                if (offsetWidth > 0 && offsetHeight > 0) {
                    setDimensions({ width: offsetWidth, height: offsetHeight });
                }
            }
        };

        // Check inicial
        updateDimensions();

        let animationFrameId;

        const resizeObserver = new ResizeObserver((entries) => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                for (const entry of entries) {
                    if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                        setDimensions({
                            width: entry.contentRect.width,
                            height: entry.contentRect.height
                        });
                    }
                }
            });
        });

        resizeObserver.observe(containerRef.current);
        return () => {
            resizeObserver.disconnect();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [isNearViewport]);

    return (
        <div ref={containerRef} className="CasinoGridInicio1_grafico">
            {isNearViewport && dimensions.width > 0 && dimensions.height > 0 ? (
                <AreaChart
                    width={dimensions.width}
                    height={dimensions.height}
                    data={casino.grafico}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
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
            ) : null}
        </div>
    );
};

const CasinoGridInicio1 = ({ casinos, onRefresh }) => {


    return (
        <div id="CasinoGridInicio1" className="CasinoGridInicio1_contenedor">
            <div className="CasinoGridInicio1_header">
                <h2 className="CasinoGridInicio1_titulo_seccion">Casinos</h2>
                <button className="CasinoGridInicio1_btn_ver_todo seleccion" onClick={() => onRefresh()}>Actualizar</button>
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

                        <CasinoGridChart casino={casino} />

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
                                    <IconoEditSquare />
                                </button>
                                <button className="CasinoGridInicio1_btn_accion primario seleccion">
                                    <IconoOpenInFull />
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
