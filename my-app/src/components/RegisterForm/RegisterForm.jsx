import React, { useState } from 'react';
import './RegisterForm.css';

import cupsInsta from "../../assets/cupsInsta.png";
import cupsTikTok from "../../assets/cupsTikTok.png";
import cupsLoginPhoto from "../../assets/cupsLoginPhoto.jpg";

function RegisterForm({ onSwitchToLogin }) {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Очищаем ошибку при изменении поля
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Проверка совпадения паролей в реальном времени
        if (name === 'confirmPassword' || name === 'password') {
            if (formData.password !== value && name === 'confirmPassword') {
                setErrors(prev => ({
                    ...prev,
                    confirmPassword: 'Пароли не совпадают'
                }));
            } else if (formData.confirmPassword && formData.confirmPassword !== value && name === 'password') {
                setErrors(prev => ({
                    ...prev,
                    confirmPassword: 'Пароли не совпадают'
                }));
            } else if (errors.confirmPassword) {
                setErrors(prev => ({
                    ...prev,
                    confirmPassword: ''
                }));
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) newErrors.email = 'Email обязателен';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Некорректный email';

        if (!formData.phone) newErrors.phone = 'Телефон обязателен';

        if (!formData.password) newErrors.password = 'Пароль обязателен';
        else if (formData.password.length < 6) newErrors.password = 'Пароль должен быть не менее 6 символов';

        if (!formData.confirmPassword) newErrors.confirmPassword = 'Подтверждение пароля обязательно';
        else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Пароли не совпадают';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Данные для регистрации:', formData);
            setIsSubmitted(true);
            setFormData({
                email: '',
                phone: '',
                password: '',
                confirmPassword: ''
            });
            setErrors({});
        } catch (error) {
            console.error('Ошибка регистрации:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <div className="register-page-wrapper">
                <div className="register-form-container">
                    <div className="success-message">
                        <h3>Регистрация успешна!</h3>
                        <p>Добро пожаловать в CUP's coffee bar! Ваш аккаунт был создан.</p>
                        <button 
                            className="submit-btn success"
                            onClick={handleReset}
                        >
                            Вернуться
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
            <div className="register-layout">
                {/* Форма регистрации СЛЕВА */}
                <div className="register-form-container">
                    <div className="register-form-header">
                        <h2 className="form-title">Регистрация</h2>
                        <p className="form-subtitle">Создайте аккаунт чтобы продолжить</p>
                    </div>

                    <form className="register-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                placeholder="example@mail.com"
                                required
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">
                                Номер телефона *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`form-input ${errors.phone ? 'error' : ''}`}
                                placeholder="+375 (XX) XXX-XX-XX"
                                required
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
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
                                className={`form-input ${errors.password ? 'error' : ''}`}
                                placeholder="Придумайте пароль"
                                required
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="form-label">
                                Подтверждение пароля *
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                                placeholder="Повторите пароль"
                                required
                            />
                            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                        </div>

                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
                        </button>
                    </form>
                </div>

                {/* Блок социальных сетей СПРАВА */}
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
            </div>
    );
}

export default RegisterForm;