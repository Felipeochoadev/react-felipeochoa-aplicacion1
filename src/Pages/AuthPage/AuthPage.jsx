import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="AuthPage_Container seleccion" id="AuthPage_Container">
            <div className="AuthPage_Header">
                <button
                    className={`AuthPage_Tab ${!isLogin ? 'active' : ''}`}
                    onClick={() => setIsLogin(false)}
                >
                    Sign Up
                </button>
                <button
                    className={`AuthPage_Tab ${isLogin ? 'active' : ''}`}
                    onClick={() => setIsLogin(true)}
                >
                    Sign In
                </button>
            </div>

            <div className="AuthPage_Form">
                {!isLogin && (
                    <div className="AuthPage_InputGroup">
                        <label>Lorem Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                )}
                <div className="AuthPage_InputGroup">
                    <label>Lorem Email</label>
                    <input type="email" placeholder="lorem@email.com" />
                </div>
                <div className="AuthPage_InputGroup">
                    <label>••••••••</label>
                    <input type="password" placeholder="Password" />
                </div>

                {!isLogin && (
                    <div className="AuthPage_Checkbox">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">Lorem ipsum dolor</label>
                    </div>
                )}

                <button
                    className="AuthPage_Submit"
                    onClick={() => navigate('/dashboard')}
                >
                    {isLogin ? 'SIGN IN' : 'SIGN UP'}
                </button>
            </div>
        </div>
    );
};

export default AuthPage;
