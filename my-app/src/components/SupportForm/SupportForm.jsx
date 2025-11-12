import React, { useState } from 'react';
import './SupportForm.css';

function SupportForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
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

        // Имитация отправки формы
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Данные формы:', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Ошибка отправки:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        return (
            <div className="support-form-container">
                <div className="success-message">
                    <h3>Сообщение отправлено!</h3>
                    <p>Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время.</p>
                    <button 
                        className="submit-btn success"
                        onClick={handleReset}
                    >
                        Отправить еще одно сообщение
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="support-form-container">
            <div className="support-form-header">
                <h2 className="form-title">Служба поддержки</h2>
                <p className="form-subtitle">Мы всегда готовы помочь вам!</p>
            </div>

            <form className="support-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        Имя *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Введите ваше имя"
                        required
                    />
                </div>

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
                        className="form-input"
                        placeholder="your@email.com"
                        required
                    />
                </div>
{/* 
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                        Телефон
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+375 (XX) XXX-XX-XX"
                    />
                </div> */}

                <div className="form-group">
                    <label htmlFor="message" className="form-label">
                        Сообщение *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        placeholder="Опишите вашу проблему или вопрос..."
                        rows="5"
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </button>
            </form>
        </div>
    );
}

export default SupportForm;