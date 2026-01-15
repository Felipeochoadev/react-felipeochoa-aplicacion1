import { useNavigate } from 'react-router-dom';
import EducationalLogo from './EducationalLogo';
import './SplashPage.css';

const SplashPage = () => {
    const navigate = useNavigate();

    return (
        <div className="SplashPage_Container seleccion" id="SplashPage_Container">
            <div className="SplashPage_Content">
                <h1 className="SplashPage_Title">EDUCATION APP</h1>
                <div className="SplashPage_Logo">
                    <EducationalLogo />
                </div>
                <p className="SplashPage_Description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                    className="SplashPage_Button"
                    onClick={() => navigate('/auth')}
                >
                    GET STARTED
                </button>
            </div>
        </div>
    );
};

export default SplashPage;
