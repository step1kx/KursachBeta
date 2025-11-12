import React, { useState } from 'react';
import './LoginLink.css'
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

function LoginLink() {
    const [currentForm, setCurrentForm] = useState('login');

    const switchToRegister = () => {
        setCurrentForm('register');
    };

    const switchToLogin = () => {
        setCurrentForm('login');
    };

    return (
        <div className="login-link-container">
            <div className={`form-wrapper ${currentForm === 'login' ? 'login-active' : 'register-active'}`}>
                {currentForm === 'login' ? (
                    <LoginForm onSwitchToRegister={switchToRegister} />
                ) : (
                    <RegisterForm onSwitchToLogin={switchToLogin} />
                )}
            </div>
            
            {/* Переключатель форм */}
            <div className="form-switcher">
                {currentForm === 'login' ? (
                    <p className="switch-text">
                        Еще нет аккаунта? 
                        <button 
                            className="switch-btn"
                            onClick={switchToRegister}
                        >
                            Зарегистрироваться
                        </button>
                    </p>
                ) : (
                    <p className="switch-text">
                        Уже есть аккаунт? 
                        <button 
                            className="switch-btn"
                            onClick={switchToLogin}
                        >
                            Войти
                        </button>
                    </p>
                )}
            </div>
        </div>
    );
}

export default LoginLink;