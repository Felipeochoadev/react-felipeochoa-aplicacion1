import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, User } from 'lucide-react';
import './TabBar.css';

const TabBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        { id: 'dashboard', icon: Home, path: '/dashboard' },
        { id: 'search', icon: Search, path: '/search' },
        { id: 'calendar', icon: Calendar, path: '/calendar' },
        { id: 'profile', icon: User, path: '/profile' }
    ];

    return (
        <div className="TabBar_Container seleccion" id="TabBar_Container">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`TabBar_Item ${location.pathname === tab.path ? 'active' : ''}`}
                    onClick={() => navigate(tab.path)}
                >
                    <tab.icon size="1.8em" />
                </button>
            ))}
        </div>
    );
};

export default TabBar;
