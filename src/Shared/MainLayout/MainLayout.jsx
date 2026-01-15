import { useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import TabBar from '../TabBar/TabBar';

const MainLayout = ({ children }) => {
    const location = useLocation();

    // Lista de rutas que NO llevan navegación
    const noNavRoutes = ['/', '/auth', '/splash'];
    const showNav = !noNavRoutes.includes(location.pathname);

    return (
        <div className="App_MainLayout">
            {showNav && <Sidebar />}
            <main className={`App_ContentArea ${!showNav ? 'no-nav' : ''}`}>
                {children}
                {showNav && <TabBar />}
            </main>
        </div>
    );
};

export default MainLayout;
