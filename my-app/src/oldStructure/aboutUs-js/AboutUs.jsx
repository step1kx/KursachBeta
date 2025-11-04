import React, { useState } from 'react';

import '../styles/aboutUs/aboutUs.css'
import '../styles/aboutUs/footer.css'

import catOwner from "../assets/catBiznes.jpg";
import catControl from "../assets/catControl.jpg";
import catBarista from "../assets/catBarista.jpg";

import cupsLogo from "../assets/cupsLogoInsta.jpg"

function EmployeeBlock() {
    const employees = [
        {
            id: 1,
            name: "Надежка",
            position: "Владелец кофейни",
            image: catOwner
        },
        {
            id: 2,
            name: "Лиза",
            position: "Управляющий",
            image: catControl
        },
        {
            id: 3,
            name: "Тоня",
            position: "Бариста",
            image: catBarista
        },
        {
            id: 4,
            name: "Анфиса",
            position: "Бариста",
            image: catBarista
        },
        {
            id: 5,
            name: "Полина",
            position: "Бариста",
            image: catBarista
        },
        {
            id: 6,
            name: "Эмилия",
            position: "Бариста",
            image: catBarista
        },
        {
            id: 7,
            name: "Паша",
            position: "Бариста",
            image: catBarista
        },
    ];

    return (
        <div className="employee-block">
            <h2 className="employee-block__header">Наш коллектив</h2>
            <div className="employees-container">
                {employees.map(employee => (
                    <div key={employee.id} className="employee-card">
                        <div className="employee-image">
                            <img 
                                src={employee.image} 
                                alt={employee.name}
                                className="employee-img"
                            />
                        </div>
                        <h3 className="employee-name">{employee.name}</h3>
                        <p className="employee-position">{employee.position}</p>
                        <p className="employee-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

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




export default function AboutUs() {
    return (
        <>
            <div className="aboutUs-block">
                <EmployeeBlock/>
            </div>
            <div className="footer-block">
                <ContactInfoBlock/>
            </div>
        </>
    );
}