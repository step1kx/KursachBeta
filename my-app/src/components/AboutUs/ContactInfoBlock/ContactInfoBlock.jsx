import React from 'react';
import cupsLogo from "../../../assets/cupsLogoInsta.jpg";
import './ContactInfoBlock.css';

function ContactInfoBlock() {
    return (
        <div className="footer-block">
            <div className="contactInfo-block">
                <div className="contactInfo-left">
                    <div className="contact-image">
                        <img src={cupsLogo} alt="Логотип кофейни" />
                    </div>
                    <div className="contact-details">
                        <h2 className="company-name">Общество с ограниченной ответственностью "Чашечки Надежды"</h2>
                        <p className="company-details">
                            Таварыства з абмежаванай адказнасцю "Кубачкi Надзеi"<br />
                            УНП 193904121<br />
                            220089, Московский р-н., г.Минск, ул.Папанина, д. 11, пом. 233
                        </p>
                    </div>
                </div>
                <div className="contactInfo-right">
                    <div className="bonus-block">
                        <h3>Устанавливайте наше мобильное приложение!</h3>
                        <button className="bonus-btn">Узнать подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfoBlock;