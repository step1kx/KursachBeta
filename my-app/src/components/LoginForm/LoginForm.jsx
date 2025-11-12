import React, { useState } from 'react';
import './LoginForm.css';

import cupsInsta from "../../assets/cupsInsta.png";
import cupsTikTok from "../../assets/cupsTikTok.png";
import cupsLoginPhoto from "../../assets/cupsLoginPhoto.jpg";

function LoginForm({ onSwitchToRegister }) {
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Данные для входа:', formData);
            setIsSubmitted(true);
            setFormData({ login: '', password: '' });
        } catch (error) {
            console.error('Ошибка входа:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <div className="login-page-wrapper">
                <div className="login-form-container">
                    <div className="success-message">
                        <h3>Вход выполнен успешно!</h3>
                        <p>Добро пожаловать обратно! Мы рады видеть вас.</p>
                        <button 
                            className="submit-btn success"
                            onClick={handleReset}
                        >
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
            <div className="login-layout">
                {/* Блок социальных сетей СЛЕВА */}
                <div className="social-sidebar">
                    <div className="cups-brand">
                        <h1 className="cups-title">CUP's</h1>
                        <p className="cups-subtitle">coffee bar</p>
                    </div>
                    
                    <div className="cups-image">
                        <img 
                            src={cupsLoginPhoto} 
                            alt="CUP's Coffee Bar" 
                            className="cups-photo"
                        />
                    </div>
                    
                    <div className="social-section">
                        <p className="social-text">Переходите в наши соцсети</p>
                        <div className="social-icons">
                            <a href="#" className="social-link">
                                <img src={cupsInsta} alt="Instagram" className="social-icon" />
                            </a>
                            <a href="#" className="social-link">
                                <img src={cupsTikTok} alt="TikTok" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Форма входа СПРАВА */}
                <div className="login-form-container">
                    <div className="login-form-header">
                        <h2 className="form-title">Вход в аккаунт</h2>
                        <p className="form-subtitle">Войдите в свой аккаунт чтобы продолжить</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="login" className="form-label">
                                Email или номер телефона *
                            </label>
                            <input
                                type="text"
                                id="login"
                                name="login"
                                value={formData.login}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="example@mail.com или +375 (XX) XXX-XX-XX"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Пароль *
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Введите ваш пароль"
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Вход...' : 'Войти'}
                        </button>
                    </form>
                </div>
            </div>
    );
}

export default LoginForm;