import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, User, LogOut, GraduationCap } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard', icon: Home, label: 'Home' },
        { path: '/search', icon: Search, label: 'Search' },
        { path: '/calendar', icon: Calendar, label: 'Calendar' },
        { path: '/profile', icon: User, label: 'Profile' }
    ];

    return (
        <aside className="Sidebar_Container">
            <div className="Sidebar_Logo">
                <div className="Sidebar_LogoIcon">
                    <GraduationCap color="white" size="1.5em" />
                </div>
                <span>EduApp</span>
            </div>

            <nav className="Sidebar_Nav">
                {menuItems.map((item) => (
                    <button
                        key={item.path}
                        className={`Sidebar_NavItem ${location.pathname === item.path ? 'active' : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <item.icon size="1.4em" />
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="Sidebar_Footer">
                <div className="Sidebar_UserProfile">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    <div className="Sidebar_UserInfo">
                        <span className="Sidebar_UserName">Felix J.</span>
                        <span className="Sidebar_UserRole">Student</span>
                    </div>
                </div>
                <button className="Sidebar_LogoutBtn" onClick={() => navigate('/auth')}>
                    <LogOut size="1.2em" />
                    <span>Log Out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
