import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import TabBar from '../../Shared/TabBar/TabBar';
import './CalendarPage.css';

const CalendarPage = () => {
    const navigate = useNavigate();

    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="CalendarPage_Container seleccion" id="CalendarPage_Container">
            <div className="CalendarPage_Header">
                <div className="CalendarPage_Top">
                    <button className="CalendarPage_Back" onClick={() => navigate(-1)}>
                        <ArrowLeft color="white" size="1.5em" />
                    </button>
                </div>
                <div className="CalendarPage_MonthNav">
                    <h2>MARCH</h2>
                    <div className="CalendarPage_Arrows">
                        <ChevronLeft color="white" />
                        <ChevronRight color="white" />
                    </div>
                </div>
                <div className="CalendarPage_WeekDays">
                    {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(d => <span key={d}>{d}</span>)}
                </div>
                <div className="CalendarPage_Grid">
                    {/* Placeholder empty days */}
                    <div className="CalendarPage_Day empty"></div>
                    <div className="CalendarPage_Day empty"></div>
                    {days.map(d => (
                        <div key={d} className={`CalendarPage_Day ${d === 15 ? 'active' : ''} ${[23, 24].includes(d) ? 'highlight' : ''}`}>
                            {d}
                        </div>
                    ))}
                </div>
            </div>

            <div className="CalendarPage_Events">
                {[1, 2].map(i => (
                    <div key={i} className="CalendarPage_EventCard">
                        <div className="CalendarPage_EventInfo">
                            <h4>Lorem ipsum 01</h4>
                            <p>Consectetur adipiscing elit, sed diam</p>
                        </div>
                        <span className="CalendarPage_EventDate">22/03/2019</span>
                    </div>
                ))}
            </div>

            <TabBar />
        </div>
    );
};

export default CalendarPage;
